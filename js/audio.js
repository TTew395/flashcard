/**
 * Audio removed per user request.
 */
class NoopAudio {
  playCorrect() {}
  playIncorrect() {}
  playFlip() {}
  playVictory() {}
  playClick() {}
  isSoundEnabled() { return false; }
  toggleSound() { return false; }
}

const audioFX = new NoopAudio();
