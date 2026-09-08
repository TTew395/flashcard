# ⚡ FlashMind - Interactive Flashcards & Quiz Learning Hub

A modern, offline-first, local web application for mastering topics through interactive quizzes with right/wrong feedback & explanations, plus 3D flashcard repetition.

![FlashMind Preview](https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png)

---

## 🌟 Highlights & Features

1. **Multiple Curated Topic Decks**:
   - 💻 **Computer Science & Web Dev**: Closures, Event Loop, HTTP Codes, Data Structures, Async JS, Web APIs.
   - 🌍 **World Geography & Extremes**: Capitals, Archipelagos, Continental Divides, Deepest Trenches.
   - 🧬 **Human Biology & Anatomy**: Organ systems, Neuroscience, Endocrine mechanisms, Cellular respiration.
   - 🧠 **Psychology & Cognitive Biases**: Confirmation bias, Dunning-Kruger, Anchoring, Zeigarnik effect.
   - 🇪🇸 **Spanish Language & Idioms**: Conversational idioms, False friends, Ser vs Estar nuances.

2. **Interactive Quiz Mode (Instant Right/Wrong Feedback & Detailed Explanations)**:
   - Multiple choice questions with 4 dynamic options.
   - **Visual Feedback**: Glowing emerald green for correct answers, gentle shake animation and red outline for incorrect answers with the correct choice immediately illuminated.
   - **Detailed Explanation Panel**: Drops down automatically explaining *why* the answer is right, along with background context and memory tips / mnemonics.
   - Live streak counter (`🔥 Streak`) and accuracy tracking.

3. **Classic 3D Flashcard Study Mode**:
   - Realistic 3D perspective flip card animations.
   - Click the card or press `Space` to flip between Prompt and Answer/Explanation.
   - Rate your recall (`Hard / Repeat`, `Good`, `Mastered`). Hard cards are automatically re-queued so you practice until you retain them!
   - Card shuffling and progress bars.

4. **Deck & Card Customization**:
   - Add new custom decks with your own questions, answers, explanations, and mnemonics.
   - Export all decks to a JSON backup file.
   - Import JSON deck files created by friends or exported previously.

5. **Audio Synthesis (Web Audio API)**:
   - Zero MP3 files required! Custom built-in sound synthesizer generates chime celebrations for correct answers, gentle low tones for wrong answers, and click swooshes for flips.
   - Sound toggle button to mute/unmute anytime.

6. **Keyboard Shortcuts**:
   - `1`, `2`, `3`, `4`: Select quiz choices or rate flashcard mastery.
   - `Space` or `Enter`: Flip flashcards / Advance to the next quiz question.
   - `←` / `→`: Navigate between cards.

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch (Simplest)
1. Double-click `index.html` in your file explorer, or right-click `index.html` and choose **Open with > Google Chrome** (or Edge/Firefox).
2. That's it! Everything works 100% offline with zero installations.

### Option 2: Local Python Server (Recommended for full web API features)
Open a terminal (PowerShell, Command Prompt, or Terminal) in this project folder and run:
```bash
python -m http.server 8000
```
Then open your browser and navigate to:
```
http://localhost:8000
```

---

## 📂 Project Architecture

```
Memorization-cards/
├── index.html          # Semantic HTML5 Single Page App shell
├── README.md           # Instructions & documentation
├── css/
│   └── styles.css      # Glassmorphism, 3D CSS transforms, dark/light themes, animations
└── js/
    ├── data.js         # Starter decks with questions, choices, explanations & mnemonics
    ├── audio.js        # Zero-asset Web Audio API sound synthesizer
    ├── storage.js      # LocalStorage persistence, mastery tracking, JSON export/import
    └── app.js          # App state, interactive quiz flow, 3D flip engine, confetti cannon
```

---

## 💾 Data Persistence
All progress, cards mastered, streaks, and custom decks are preserved locally in your browser's `localStorage`. No accounts or server database needed.
