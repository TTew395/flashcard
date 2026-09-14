# Flashcard Study

A type-to-answer flashcard web app that runs entirely in your browser — no accounts, no server, no tracking.

**Live site:** https://ttew395.github.io/flashcard

---

## Decks

| Deck | Cards | Topics |
|------|-------|--------|
| ⚗️ AP Chemistry: Polyatomic Ions | 28 | Formulas, charges, and systematic nomenclature for essential AP Chem polyatomic ions |
| 🧪 AP Chemistry: Strong Acids & Bases | 8 | The 7 strong acids and strong soluble bases required for AP Chemistry |
| カタカナ Katakana | 102 | Full katakana syllabary including dakuten, handakuten, and compound characters |
| 平仮名 Hiragana | 102 | Full hiragana syllabary including dakuten, handakuten, and compound characters |

---

## How to Use

1. Open the site (or `index.html` locally by double-clicking it).
2. Choose a deck to begin studying.
3. Type your answer in the input field and press **Check** or **Enter**.
4. Feedback appears immediately: green for correct, red for incorrect, with an explanation.
5. If you answer incorrectly, you must type the correct answer to proceed.
6. Press **Next →** (or Enter) to advance; **Skip →** to skip a card.
7. Click **← All decks** to switch decks.

---

## Mastery & Semi-Random Queue System

* **Card Mastery:** Each card has a mastery level ranging from `0 / 3` to `3 / 3`. Correct answers increment mastery (+1 up to 3), while incorrect answers decrement mastery (-1 down to 0).
* **Semi-Random Queue:** Cards are drawn weighted by their mastery level—unmastered cards appear much more frequently than cards closer to mastery.
* **Auto-Completion:** Once a card reaches full mastery (`3 / 3`), it is removed from the active study queue. When all cards in a deck are mastered, the deck is marked complete!
* **Attempts Display:** Displays total attempts relative to target attempts (`Attempts: X / (Deck Cards × 3)`).

### Keyboard shortcuts
| Key | Action |
|-----|--------|
| `Enter` | Check answer / advance to next card |
| `Tab` → `Enter` | Skip card |

---

## Adding Your Own Decks

Click **← All decks** → **+ New Deck** to create a custom deck directly in the browser. Your decks and progress are saved automatically in `localStorage`.

You can also **Export JSON** to back up all your decks, and **Import JSON** to restore them or share with others.

---

## Running Locally

Just double-click `index.html` — no server needed. Everything is self-contained.

Alternatively:
```bash
python -m http.server 8000
# then open http://localhost:8000
