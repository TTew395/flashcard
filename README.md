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

1. Open the site (or `index.html` locally by double-clicking it)
2. A deck loads automatically — type your answer in the input field and press **Check** or **Enter**
3. Feedback appears immediately: green for correct, red for incorrect, with an explanation
4. Press **Next →** (or Enter) to advance; **Skip →** to skip a card
5. Toggle **Shuffle** to randomize card order
6. Click **← All decks** to switch decks

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
```

---

## File Structure

```
index.html          ← Standalone app (CSS + JS all inlined, open directly in browser)
js/
  data.js           ← All deck definitions (edit here to change default decks)
  storage.js        ← localStorage persistence layer
  app.js            ← App logic
  audio.js          ← (stub, audio removed)
css/
  styles.css        ← Styles (also inlined in index.html)
.github/workflows/
  deploy.yml        ← Auto-deploys to GitHub Pages on push to main
```

> **Note:** `index.html` is fully self-contained and does not depend on the external `js/` or `css/` files at runtime. Those files exist for development reference. The GitHub Pages deployment serves `index.html` directly.
