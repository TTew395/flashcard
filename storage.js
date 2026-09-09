const STORAGE_KEYS = {
  DECKS: 'flashmind_decks_v6', // Bumped version to invalidate old cache
  PROGRESS: 'flashmind_progress_v2',
  STATS: 'flashmind_stats_v2',
  SETTINGS: 'flashmind_settings_v2'
};

class StorageManager {
  constructor() {
    this.decks = []; // Populated during init()
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
      console.warn('Failed to fetch data.json. (Are you running via file:// instead of a local server?):', e);
    }
    
    // Process and merge the fetched data
    this.decks = this.loadDecks(defaults);
  }

  loadDecks(defaults) {
    let loadedDecks = [];

    try {
      const stored = localStorage.getItem(STORAGE_KEYS.DECKS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          loadedDecks = parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load decks from localStorage:', e);
    }

    if (loadedDecks.length === 0) {
      this.saveDecks(defaults);
      return JSON.parse(JSON.stringify(defaults));
    }

    let updated = false;
    defaults.forEach(defaultDeck => {
      const existingIdx = loadedDecks.findIndex(d => d.id === defaultDeck.id);
      if (existingIdx >= 0) {
        // Overwrite existing default decks to apply JSON corrections
        loadedDecks[existingIdx] = defaultDeck;
        updated = true;
      } else {
        loadedDecks.push(defaultDeck);
        updated = true;
      }
    });

    if (updated) {
      this.saveDecks(loadedDecks);
    }

    return loadedDecks;
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
    } catch (e) {
      return {};
    }
  }

  saveProgress(progress) {
    this.progress = progress;
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
    } catch (e) {}
  }

  setCardMastery(cardId, isMastered) {
    this.progress[cardId] = {
      mastered: !!isMastered,
      timestamp: Date.now()
    };
    this.saveProgress(this.progress);
  }

  isCardMastered(cardId) {
    return !!this.progress[cardId]?.mastered;
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