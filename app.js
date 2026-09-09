/**
 * Flashcard Study - User Input Study Controller
 * Matches screenshot format: type-to-answer, check button, feedback & explanation,
 * score tracking, shuffle toggle, and multi-deck management.
 */

class FlashcardStudyApp {
  constructor() {
    this.currentDeck = null;
    this.activeCards = [];
    this.currentIndex = 0;
    this.isAnswerChecked = false;

    this.initElements();
    this.initDeck();
    this.bindEvents();
  }

  initElements() {
    this.studyView = document.getElementById('study-view');
    this.decksView = document.getElementById('decks-view');
    this.logoBrandBtn = document.getElementById('logo-brand-btn');
    this.allDecksBtn = document.getElementById('all-decks-btn');
    this.backToStudyBtn = document.getElementById('back-to-study-btn');
    this.deckTitleDisplay = document.getElementById('deck-title-display');
    this.deckMasteredDisplay = document.getElementById('deck-mastered-display');
    this.scoreDisplay = document.getElementById('score-display');
    this.cardPromptDisplay = document.getElementById('card-prompt-display');
    this.answerForm = document.getElementById('answer-form');
    this.answerInput = document.getElementById('answer-input');
    this.btnCheck = document.getElementById('btn-check');
    this.cardFeedbackBox = document.getElementById('card-feedback-box');
    this.feedbackStatusTitle = document.getElementById('feedback-status-title');
    this.feedbackCorrectAnswer = document.getElementById('feedback-correct-answer');
    this.feedbackExplanation = document.getElementById('feedback-explanation');
    this.btnFeedbackNext = document.getElementById('btn-feedback-next');
    this.shuffleCheckbox = document.getElementById('shuffle-checkbox');
    this.btnSkip = document.getElementById('btn-skip');
    this.decksGridContainer = document.getElementById('decks-grid-container');
    this.exportDecksBtn = document.getElementById('export-decks-btn');
    this.importDecksBtn = document.getElementById('import-decks-btn');
    this.importFileInput = document.getElementById('import-file-input');
    this.openNewDeckModalBtn = document.getElementById('open-new-deck-modal-btn');
    this.deckEditorModal = document.getElementById('deck-editor-modal');
    this.modalCloseBtn = document.getElementById('modal-close-btn');
    this.modalCancelBtn = document.getElementById('modal-cancel-btn');
    this.deckEditorForm = document.getElementById('deck-editor-form');
    this.deckTitleInput = document.getElementById('deck-title-input');
    this.deckDescInput = document.getElementById('deck-desc-input');
    this.modalCardCount = document.getElementById('modal-card-count');
    this.modalAddCardBtn = document.getElementById('modal-add-card-btn');
    this.modalCardsContainer = document.getElementById('modal-cards-container');
  }

  initDeck() {
    const settings = window.storage.loadSettings();
    if (settings && typeof settings.shuffle === 'boolean') {
      this.shuffleCheckbox.checked = settings.shuffle;
    }
    // Load first deck available
    if (window.storage.decks.length > 0) {
      this.loadDeckForStudy(window.storage.decks[0]);
    }
  }

  loadDeckForStudy(deck) {
    this.currentDeck = deck;
    this.activeCards = [...deck.cards];
    if (this.shuffleCheckbox.checked) {
      this.shuffleArray(this.activeCards);
    }
    this.currentIndex = 0;
    this.showStudyView();
    this.renderCurrentCard();
  }

  showStudyView() {
    this.decksView.classList.remove('active');
    this.studyView.style.display = 'block';
  }

  showDecksView() {
    this.studyView.style.display = 'none';
    this.decksView.classList.add('active');
    this.renderDecksGrid();
  }

  renderCurrentCard() {
    if (!this.activeCards || this.activeCards.length === 0) {
      this.cardPromptDisplay.textContent = "No cards";
      return;
    }

    if (this.currentIndex >= this.activeCards.length) {
      this.currentIndex = 0;
      if (this.shuffleCheckbox.checked) {
        this.shuffleArray(this.activeCards);
      }
    }

    const card = this.activeCards[this.currentIndex];
    this.isAnswerChecked = false;

    this.deckTitleDisplay.textContent = this.currentDeck.title;
    const { mastered, total } = window.storage.getDeckMasteredCount(this.currentDeck.id);
    this.deckMasteredDisplay.textContent = `${mastered} / ${total} mastered`;
    this.scoreDisplay.textContent = `Score: ${window.storage.getScore()}`;
    this.cardPromptDisplay.innerHTML = card.question;

    this.answerInput.value = '';
    this.answerInput.disabled = false;
    this.btnCheck.style.display = 'inline-block';
    this.cardFeedbackBox.classList.remove('active', 'feedback-correct', 'feedback-incorrect');

    setTimeout(() => {
      this.answerInput.focus();
    }, 50);
  }

  handleAnswerCheck() {
    if (this.isAnswerChecked) {
      this.advanceToNextCard();
      return;
    }

    const rawInput = this.answerInput.value.trim();
    if (!rawInput) return;

    this.isAnswerChecked = true;
    const card = this.activeCards[this.currentIndex];
    const isMatch = this.checkAnswerMatch(rawInput, card);

    this.cardFeedbackBox.classList.remove('feedback-correct', 'feedback-incorrect');

    if (isMatch) {
      window.storage.addScore(1); 
      window.storage.setCardMastery(card.id, true);

      this.cardFeedbackBox.classList.add('active', 'feedback-correct');
      this.feedbackStatusTitle.innerHTML = '<span>✓</span> Correct!';
      this.feedbackCorrectAnswer.textContent = card.answer;
      this.feedbackExplanation.textContent = card.explanation || '';
    } else {
      window.storage.setCardMastery(card.id, false);
      this.activeCards.push(card); 

      this.cardFeedbackBox.classList.add('active', 'feedback-incorrect');
      this.feedbackStatusTitle.innerHTML = '<span>✕</span> Incorrect';
      this.feedbackCorrectAnswer.textContent = `The correct answer is: ${card.answer}`;
      this.feedbackExplanation.textContent = card.explanation || '';
    }

    this.scoreDisplay.textContent = `Score: ${window.storage.getScore()}`;
    const { mastered, total } = window.storage.getDeckMasteredCount(this.currentDeck.id);
    this.deckMasteredDisplay.textContent = `${mastered} / ${total} mastered`;

    this.answerInput.disabled = true;
    this.btnCheck.style.display = 'none';
    this.btnFeedbackNext.focus();
  }

  checkAnswerMatch(userInput, card) {
    const normalize = (str) => {
      return (str || '')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')
        .trim();
    };

    const userNorm = normalize(userInput);
    const targetNorm = normalize(card.answer);

    if (userNorm === targetNorm) return true;

    if (Array.isArray(card.aliases)) {
      for (const alias of card.aliases) {
        if (userNorm === normalize(alias)) return true;
      }
    }

    return false;
  }

  advanceToNextCard() {
    this.currentIndex += 1;
    this.renderCurrentCard();
  }

  skipCurrentCard() {
    this.currentIndex += 1;
    this.renderCurrentCard();
  }

  renderDecksGrid() {
    this.decksGridContainer.innerHTML = '';
    const decks = window.storage.decks;

    decks.forEach(deck => {
      const { mastered, total } = window.storage.getDeckMasteredCount(deck.id);
      const cardEl = document.createElement('div');
      cardEl.className = 'deck-select-card';

      cardEl.innerHTML = `
        <div>
          <div style="font-size: 1.75rem; margin-bottom: 0.6rem;">${deck.icon || '📚'}</div>
          <h3 class="deck-select-title">${this.escapeHTML(deck.title)}</h3>
          <p class="deck-select-desc">${this.escapeHTML(deck.description || '')}</p>
        </div>
        <div class="deck-select-footer">
          <span>${deck.cards.length} cards</span>
          <span class="deck-badge-mastered">${mastered} / ${total} mastered</span>
        </div>
      `;

      cardEl.addEventListener('click', () => {
        this.loadDeckForStudy(deck);
      });

      this.decksGridContainer.appendChild(cardEl);
    });
  }

  bindEvents() {
    this.allDecksBtn.addEventListener('click', () => this.showDecksView());
    this.backToStudyBtn.addEventListener('click', () => this.showStudyView());
    this.logoBrandBtn.addEventListener('click', () => this.showStudyView());

    this.answerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleAnswerCheck();
    });

    this.btnFeedbackNext.addEventListener('click', () => {
      this.advanceToNextCard();
    });

    this.btnSkip.addEventListener('click', () => {
      this.skipCurrentCard();
    });

    this.shuffleCheckbox.addEventListener('change', (e) => {
      window.storage.saveSettings({ shuffle: e.target.checked });
      if (e.target.checked) {
        this.shuffleArray(this.activeCards);
        this.renderCurrentCard();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && this.isAnswerChecked) {
        e.preventDefault();
        this.advanceToNextCard();
      }
    });

    this.exportDecksBtn.addEventListener('click', () => {
      window.storage.exportAllDecksJSON();
    });

    this.importDecksBtn.addEventListener('click', () => {
      this.importFileInput.click();
    });

    this.importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const res = window.storage.importDecksJSON(event.target.result);
        if (res.success) {
          alert(`Imported ${res.count} deck(s)!`);
          this.renderDecksGrid();
        } else {
          alert(`Import failed: ${res.error}`);
        }
        this.importFileInput.value = '';
      };
      reader.readAsText(file);
    });

    this.openNewDeckModalBtn.addEventListener('click', () => this.openModal());
    this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    this.modalCancelBtn.addEventListener('click', () => this.closeModal());
    this.modalAddCardBtn.addEventListener('click', () => this.addCardRowToModal());
    this.deckEditorForm.addEventListener('submit', (e) => this.handleSaveNewDeck(e));
  }

  openModal() {
    this.deckTitleInput.value = '';
    this.deckDescInput.value = '';
    this.modalCardsContainer.innerHTML = '';
    this.addCardRowToModal();
    this.addCardRowToModal();
    this.deckEditorModal.classList.add('active');
    this.deckTitleInput.focus();
  }

  closeModal() {
    this.deckEditorModal.classList.remove('active');
  }

  addCardRowToModal(q = '', a = '', exp = '') {
    const row = document.createElement('div');
    row.className = 'card-row-builder';
    row.innerHTML = `
      <button type="button" class="card-remove-btn" title="Remove">✕</button>
      <input type="text" class="form-input card-q-field" placeholder="Question / Formula *" required value="${this.escapeHTML(q)}">
      <input type="text" class="form-input card-a-field" placeholder="Correct Answer *" required value="${this.escapeHTML(a)}">
      <input type="text" class="form-input card-e-field" placeholder="Explanation" value="${this.escapeHTML(exp)}">
    `;

    row.querySelector('.card-remove-btn').addEventListener('click', () => {
      row.remove();
      this.updateModalCardCount();
    });

    this.modalCardsContainer.appendChild(row);
    this.updateModalCardCount();
  }

  updateModalCardCount() {
    const count = this.modalCardsContainer.querySelectorAll('.card-row-builder').length;
    this.modalCardCount.textContent = count;
  }

  handleSaveNewDeck(e) {
    e.preventDefault();
    const title = this.deckTitleInput.value.trim();
    const desc = this.deckDescInput.value.trim();

    const rows = this.modalCardsContainer.querySelectorAll('.card-row-builder');
    const cards = [];
    rows.forEach((r, idx) => {
      const q = r.querySelector('.card-q-field').value.trim();
      const a = r.querySelector('.card-a-field').value.trim();
      const exp = r.querySelector('.card-e-field').value.trim();

      if (q && a) {
        cards.push({
          id: `card-${Date.now()}-${idx}`,
          question: q,
          answer: a,
          explanation: exp || `The correct answer is ${a}.`
        });
      }
    });

    if (cards.length === 0) {
      alert('Please provide at least one card.');
      return;
    }

    const newDeck = {
      id: `deck-${Date.now()}`,
      title,
      description: desc,
      icon: '📚',
      cards
    };

    window.storage.saveDeck(newDeck);
    this.closeModal();
    this.loadDeckForStudy(newDeck);
  }

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// ASYNC INITIALIZATION
document.addEventListener('DOMContentLoaded', async () => {
  window.storage = new StorageManager();
  await window.storage.init(); // Wait for data.json fetch to complete
  window.app = new FlashcardStudyApp();
});