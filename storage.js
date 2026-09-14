const STORAGE_KEYS = {
  DECKS: 'flashmind_decks_v6',
  PROGRESS: 'flashmind_progress_v2',
  STATS: 'flashmind_stats_v2',
  SETTINGS: 'flashmind_settings_v2'
};

class StorageManager {
  constructor() {
    this.decks = [];
    this.progress = this.loadProgress();
    this.stats = this.loadStats();
    this.settings = this.loadSettings();
  }

  async init() {
    let defaults = [];
    try {
      const response = await fetch('data.json');
      if (response.ok) {
        defaults = await response.json();
      } else {
        console.warn('Failed to load data.json. Status:', response.status);
      }
    } catch (e) {
      console.warn('Failed to fetch data.json:', e);
    }
    
    this.decks = this.loadDecks(defaults);
  }

  loadDecks(defaults) {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.DECKS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse stored decks:', e);
    }

    this.saveDecks(defaults);
    return JSON.parse(JSON.stringify(defaults));
  }

  saveDecks(decks) {
    this.decks = decks;
    try {
      localStorage.setItem(STORAGE_KEYS.DECKS, JSON.stringify(decks));
    } catch (e) {}
  }

  loadProgress() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      return stored ? JSON.parse(stored) : {};
    } catch (e) { return {}; }
  }

  saveProgress(progress) {
    this.progress = progress;
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
    } catch (e) {}
  }

  getCardTargetMastery(cardId) {
    const entry = this.progress[cardId];
    return entry && typeof entry.targetMastery === 'number' ? entry.targetMastery : 3;
  }

  setCardMastery(cardId, isCorrect) {
    const existing = this.progress[cardId] || { 
      count: 0, 
      mastered: false, 
      targetMastery: 3, 
      incorrectCountThisRun: 0,
      limitIncreasedThisRun: false 
    };

    if (typeof existing.targetMastery !== 'number') existing.targetMastery = 3;
    if (typeof existing.incorrectCountThisRun !== 'number') existing.incorrectCountThisRun = 0;

    if (isCorrect) {
      existing.count = Math.min(existing.targetMastery, (existing.count || 0) + 1);
    } else {
      existing.count = Math.max(0, (existing.count || 0) - 1);
      existing.incorrectCountThisRun += 1;

      // Increase target limit if below 3, only once per deck run
      if (existing.targetMastery < 3 && !existing.limitIncreasedThisRun) {
        existing.targetMastery = Math.min(3, existing.targetMastery + 1);
        existing.limitIncreasedThisRun = true;
      }
    }

    existing.mastered = existing.count >= existing.targetMastery;
    existing.timestamp = Date.now();

    this.progress[cardId] = existing;
    this.saveProgress(this.progress);
  }

  getCardMasteryLevel(cardId) {
    const entry = this.progress[cardId];
    return entry && typeof entry.count === 'number' ? entry.count : 0;
  }

  isCardMastered(cardId) {
    const target = this.getCardTargetMastery(cardId);
    return this.getCardMasteryLevel(cardId) >= target;
  }

  resetDeckProgress(deckId) {
    const deck = this.getDeckById(deckId);
    if (!deck || !deck.cards) return;

    // Check if whole deck was completed
    const { mastered, total } = this.getDeckMasteredCount(deckId);
    const isDeckFullyMastered = total > 0 && mastered === total;

    deck.cards.forEach(card => {
      const entry = this.progress[card.id] || { targetMastery: 3, incorrectCountThisRun: 0 };
      let currentTarget = typeof entry.targetMastery === 'number' ? entry.targetMastery : 3;
      const wrongAttempts = entry.incorrectCountThisRun || 0;

      // Decrement target by 1 if mastered flawlessly without wrong answers
      if (isDeckFullyMastered && wrongAttempts === 0) {
        currentTarget = Math.max(1, currentTarget - 1);
      }

      this.progress[card.id] = {
        count: 0,
        mastered: false,
        targetMastery: currentTarget,
        incorrectCountThisRun: 0,
        limitIncreasedThisRun: false,
        timestamp: Date.now()
      };
    });

    this.saveProgress(this.progress);

    // Reset attempt stats for deck
    if (this.stats.attempts) {
      this.stats.attempts[deckId] = 0;
      this.saveStats(this.stats);
    }
  }

  loadStats() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.STATS);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return { attempts: {} };
  }

  saveStats(stats) {
    this.stats = stats;
    try {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    } catch (e) {}
  }

  incrementDeckAttempts(deckId) {
    if (!this.stats.attempts) {
      this.stats.attempts = {};
    }
    this.stats.attempts[deckId] = (this.stats.attempts[deckId] || 0) + 1;
    this.saveStats(this.stats);
    return this.stats.attempts[deckId];
  }

  getDeckAttempts(deckId) {
    if (!this.stats.attempts) return 0;
    return this.stats.attempts[deckId] || 0;
  }

  getDeckTotalTargetMasterySum(deckId) {
    const deck = this.getDeckById(deckId);
    if (!deck || !deck.cards) return 0;
    return deck.cards.reduce((sum, card) => sum + this.getCardTargetMastery(card.id), 0);
  }

  loadSettings() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return { shuffle: true };
  }

  saveSettings(settings) {
    this.settings = settings;
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {}
  }

  getDeckById(id) {
    return this.decks.find(d => d.id === id) || null;
  }

  saveDeck(deck) {
    const index = this.decks.findIndex(d => d.id === deck.id);
    if (index >= 0) {
      this.decks[index] = deck;
    } else {
      this.decks.push(deck);
    }
    this.saveDecks(this.decks);
    return deck;
  }

  deleteDeck(deckId) {
    this.decks = this.decks.filter(d => d.id !== deckId);
    this.saveDecks(this.decks);
  }

  getDeckMasteredCount(deckId) {
    const deck = this.getDeckById(deckId);
    if (!deck || !deck.cards) return { mastered: 0, total: 0 };
    let mastered = 0;
    deck.cards.forEach(c => {
      if (this.isCardMastered(c.id)) mastered++;
    });
    return { mastered, total: deck.cards.length };
  }

  exportAllDecksJSON() {
    const exportData = { version: "2.0", exportDate: new Date().toISOString(), decks: this.decks };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `flashcard-study-decks.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importDecksJSON(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      const incomingDecks = Array.isArray(data) ? data : data.decks;
      if (!Array.isArray(incomingDecks)) throw new Error('Invalid JSON: expected array of decks');

      incomingDecks.forEach(newDeck => {
        if (!newDeck.id) newDeck.id = 'deck-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
        const existingIdx = this.decks.findIndex(d => d.id === newDeck.id);
        if (existingIdx >= 0) {
          this.decks[existingIdx] = newDeck;
        } else {
          this.decks.push(newDeck);
        }
      });

      this.saveDecks(this.decks);
      return { success: true, count: incomingDecks.length };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }
}
