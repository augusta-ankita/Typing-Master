const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing games improve your speed and accuracy.",
  "JavaScript makes websites interactive and dynamic.",
  "Practice daily to become a typing master.",
  "Coding is both logical and creative."
];

let currentSentence = "";
let score = 0;
let timeLeft = 60;
let timerInterval;

function startGame() {
  score = 0;
  timeLeft = 120;
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("timer").textContent = `Time: ${timeLeft}`;
  document.getElementById("message").textContent = "";
  document.getElementById("user-input").value = "";

  loadNewSentence();

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById("message").textContent = `Time's up! Your score: ${score}`;
    }
  }, 1000);
}

function loadNewSentence() {
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById("sentence-display").textContent = currentSentence;
  document.getElementById("user-input").value = "";
  document.getElementById("user-input").focus();
}

function checkInput() {
  const input = document.getElementById("user-input").value;
  if (input.trim() === currentSentence) {
    score += 10;
    document.getElementById("score").textContent = `Score: ${score}`;
    loadNewSentence();
  }
}

window.onload = startGame;
