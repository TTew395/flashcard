class FlashcardStudyApp {
  constructor() {
    this.currentDeck = null;
    this.currentCard = null;
    this.isAnswerChecked = false;
    this.isRetryMode = false;

    this.initElements();
    this.initDeck();
    this.bindEvents();
  }

  initElements() {
    this.studyView = document.getElementById('study-view');
    this.decksView = document.getElementById('decks-view');
    this.logoBrandBtn = document.getElementById('logo-brand-btn');
    this.allDecksBtn = document.getElementById('all-decks-btn');
    this.btnResetDeck = document.getElementById('btn-reset-deck');
    this.btnResetDeckProminent = document.getElementById('btn-reset-deck-prominent');
    this.deckCompletedWrapper = document.getElementById('deck-completed-wrapper');
    this.backToStudyBtn = document.getElementById('back-to-study-btn');
    this.deckTitleDisplay = document.getElementById('deck-title-display');
    this.deckMasteredDisplay = document.getElementById('deck-mastered-display');
    this.attemptsDisplay = document.getElementById('attempts-display');
    this.cardPromptDisplay = document.getElementById('card-prompt-display');
    this.cardMasteryLevelDisplay = document.getElementById('card-mastery-level-display');
    this.answerForm = document.getElementById('answer-form');
    this.answerInput = document.getElementById('answer-input');
    this.btnCheck = document.getElementById('btn-check');
    this.cardFeedbackBox = document.getElementById('card-feedback-box');
    this.feedbackStatusTitle = document.getElementById('feedback-status-title');
    this.feedbackCorrectAnswer = document.getElementById('feedback-correct-answer');
    this.feedbackExplanation = document.getElementById('feedback-explanation');
    this.btnFeedbackNext = document.getElementById('btn-feedback-next');
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
    this.showDecksView();
  }

  loadDeckForStudy(deck) {
    this.currentDeck = deck;
    this.currentCard = null;
    this.showStudyView();
    this.pickNextSemiRandomCard();
  }

  showStudyView() {
    this.decksView.classList.remove('active');
    this.studyView.style.display = 'block';
  }

  showDecksView() {
    this.studyView.style.display = 'none';
    this.decksView.classList.add('active');

    if (!this.currentDeck) {
      this.backToStudyBtn.style.display = 'none';
    } else {
      this.backToStudyBtn.style.display = 'inline-flex';
    }

    this.renderDecksGrid();
  }

  resetCurrentDeck() {
    if (!this.currentDeck) return;
    window.storage.resetDeckProgress(this.currentDeck.id);
    this.currentCard = null;
    this.pickNextSemiRandomCard();
  }

  pickNextSemiRandomCard() {
    if (!this.currentDeck || !this.currentDeck.cards || this.currentDeck.cards.length === 0) {
      this.currentCard = null;
      this.renderCurrentCard();
      return;
    }

    const cards = this.currentDeck.cards;
    
    // Assign weighted probabilities based on distance to card target mastery
    const weights = cards.map(c => {
      const level = window.storage.getCardMasteryLevel(c.id);
      const target = window.storage.getCardTargetMastery(c.id);
      if (level >= target) return 0; // Exclude mastered cards
      return Math.max(1, (target - level) + 1);
    });

    const unmasteredCount = weights.filter(w => w > 0).length;

    if (unmasteredCount === 0) {
      this.currentCard = null;
      this.renderCurrentCard();
      return;
    }

    if (unmasteredCount > 1 && this.currentCard) {
      const curIndex = cards.findIndex(c => c.id === this.currentCard.id);
      if (curIndex !== -1) {
        weights[curIndex] = 0;
      }
    }

    const totalWeight = weights.reduce((acc, val) => acc + val, 0);
    let rand = Math.random() * totalWeight;

    let selected = null;
    for (let i = 0; i < cards.length; i++) {
      if (weights[i] === 0) continue;
      if (rand < weights[i]) {
        selected = cards[i];
        break;
      }
      rand -= weights[i];
    }

    if (!selected) {
      selected = cards.find((c, i) => weights[i] > 0);
    }

    this.currentCard = selected;
    this.renderCurrentCard();
  }

  renderCurrentCard() {
    if (this.currentDeck) {
      this.currentDeck = window.storage.getDeckById(this.currentDeck.id) || this.currentDeck;
    }

    this.deckTitleDisplay.textContent = this.currentDeck ? this.currentDeck.title : '';
    const { mastered, total } = window.storage.getDeckMasteredCount(this.currentDeck ? this.currentDeck.id : '');
    this.deckMasteredDisplay.textContent = `${mastered} / ${total} mastered`;
    
    const attempts = this.currentDeck ? window.storage.getDeckAttempts(this.currentDeck.id) : 0;
    const targetAttempts = this.currentDeck ? window.storage.getDeckTotalTargetMasterySum(this.currentDeck.id) : 0;
    this.attemptsDisplay.textContent = `Attempts: ${attempts} / ${targetAttempts}`;

    // Completed deck state
    if (!this.currentCard) {
      this.cardPromptDisplay.textContent = "🎉 All cards in this deck are mastered!";
      this.cardMasteryLevelDisplay.textContent = "Mastery: Complete";
      this.answerForm.style.display = 'none';
      this.btnSkip.style.display = 'none';
      this.cardFeedbackBox.classList.remove('active');
      
      this.deckCompletedWrapper.style.display = 'flex';
      return;
    }

    this.deckCompletedWrapper.style.display = 'none';
    this.answerForm.style.display = 'flex';
    this.btnSkip.style.display = 'inline-block';

    this.isAnswerChecked = false;
    this.isRetryMode = false;

    const cardLevel = window.storage.getCardMasteryLevel(this.currentCard.id);
    const cardTarget = window.storage.getCardTargetMastery(this.currentCard.id);
    this.cardMasteryLevelDisplay.textContent = `Mastery: ${cardLevel} / ${cardTarget}`;
    this.cardPromptDisplay.innerHTML = this.currentCard.question;

    this.answerInput.value = '';
    this.answerInput.disabled = false;
    this.answerInput.placeholder = "Type the answer...";
    this.btnCheck.style.display = 'inline-block';
    this.btnFeedbackNext.style.display = 'none';
    this.cardFeedbackBox.classList.remove('active', 'feedback-correct', 'feedback-incorrect');

    setTimeout(() => {
      this.answerInput.focus();
    }, 50);
  }

  handleAnswerCheck() {
    const rawInput = this.answerInput.value.trim();
    if (!rawInput) return;

    if (this.currentDeck) {
      window.storage.incrementDeckAttempts(this.currentDeck.id);
    }

    const card = this.currentCard;
    const isMatch = this.checkAnswerMatch(rawInput, card);

    if (this.isRetryMode) {
      if (isMatch) {
        this.pickNextSemiRandomCard();
      } else {
        this.answerInput.value = '';
        this.answerInput.focus();
      }
      return;
    }

    this.isAnswerChecked = true;
    this.cardFeedbackBox.classList.remove('feedback-correct', 'feedback-incorrect');

    if (isMatch) {
      window.storage.setCardMastery(card.id, true);

      this.cardFeedbackBox.classList.add('active', 'feedback-correct');
      this.feedbackStatusTitle.innerHTML = '<span>✓</span> Correct!';
      this.feedbackCorrectAnswer.textContent = card.answer;
      this.feedbackExplanation.textContent = card.explanation || '';

      this.answerInput.disabled = true;
      this.btnCheck.style.display = 'none';
      this.btnFeedbackNext.style.display = 'inline-block';
      this.btnFeedbackNext.focus();
    } else {
      window.storage.setCardMastery(card.id, false);
      this.isRetryMode = true;

      this.cardFeedbackBox.classList.add('active', 'feedback-incorrect');
      this.feedbackStatusTitle.innerHTML = '<span>✕</span> Incorrect';
      this.feedbackCorrectAnswer.textContent = `The correct answer is: ${card.answer}`;
      this.feedbackExplanation.textContent = card.explanation ? `${card.explanation} (Type the correct answer above to continue)` : 'Type the correct answer above to continue.';

      this.answerInput.value = '';
      this.answerInput.disabled = false;
      this.answerInput.placeholder = "Type correct answer to proceed...";
      this.btnCheck.style.display = 'inline-block';
      this.btnFeedbackNext.style.display = 'none';
      this.answerInput.focus();
    }

    if (this.currentDeck) {
      this.currentDeck = window.storage.getDeckById(this.currentDeck.id) || this.currentDeck;
    }

    const attempts = window.storage.getDeckAttempts(this.currentDeck.id);
    const { mastered, total } = window.storage.getDeckMasteredCount(this.currentDeck.id);
    const targetAttempts = window.storage.getDeckTotalTargetMasterySum(this.currentDeck.id);
    
    this.attemptsDisplay.textContent = `Attempts: ${attempts} / ${targetAttempts}`;
    this.deckMasteredDisplay.textContent = `${mastered} / ${total} mastered`;

    const cardLevel = window.storage.getCardMasteryLevel(card.id);
    const cardTarget = window.storage.getCardTargetMastery(card.id);
    this.cardMasteryLevelDisplay.textContent = `Mastery: ${cardLevel} / ${cardTarget}`;
  }

  checkAnswerMatch(userInput, card) {
    const normalize = (str) => {
      return (str || '')
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]/gu, '') // Supports Unicode characters including Japanese (Hiragana, Katakana, Kanji)
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
    this.pickNextSemiRandomCard();
  }

  skipCurrentCard() {
    this.pickNextSemiRandomCard();
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

    this.btnResetDeck.addEventListener('click', () => {
      if (confirm('Reset progress for this deck? All card masteries and attempt counts for this deck will return to 0.')) {
        this.resetCurrentDeck();
      }
    });

    this.btnResetDeckProminent.addEventListener('click', () => {
      this.resetCurrentDeck();
    });

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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && this.isAnswerChecked && !this.isRetryMode) {
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
      <input type="text" class="form-input card-q-field" placeholder="Question *" required value="${this.escapeHTML(q)}">
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

document.addEventListener('DOMContentLoaded', async () => {
  window.storage = new StorageManager();
  await window.storage.init();
  window.app = new FlashcardStudyApp();
});
