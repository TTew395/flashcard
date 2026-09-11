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
          // Return saved decks directly to avoid overwriting user updates
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse stored decks:', e);
    }

    // Populate local storage with defaults only if empty
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

setCardMastery(cardId, isCorrect) {
  const existing = this.progress[cardId] || { count: 0, mastered: false };

  if (isCorrect) {
    // Increment correct count
    existing.count = (existing.count || 0) + 1;
  }

  // Set mastered ONLY if the correct streak reaches 3
  existing.mastered = existing.count >= 3;
  existing.timestamp = Date.now();

  this.progress[cardId] = existing;
  this.saveProgress(this.progress);
}

isCardMastered(cardId) {
  const entry = this.progress[cardId];
  // Strictly require count to be at least 3
  return !!(entry && entry.count >= 3);
}

  isCardMastered(cardId) {
    const entry = this.progress[cardId];
    return !!(entry && entry.count >= 3);
  }

  loadStats() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.STATS);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return { score: 0, totalAnswered: 0, totalCorrect: 0 };
  }

  saveStats(stats) {
    this.stats = stats;
    try {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    } catch (e) {}
  }

  addScore(points) {
    this.stats.score = Math.max(0, (this.stats.score || 0) + points);
    this.saveStats(this.stats);
    return this.stats.score;
  }

  getScore() {
    return this.stats.score || 0;
  }

  resetScore() {
    this.stats.score = 0;
    this.saveStats(this.stats);
    return 0;
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
