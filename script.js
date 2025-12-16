// Elements
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const startScreen = document.getElementById("start-screen");
const gameArea = document.getElementById("game-area");
const endScreen = document.getElementById("end-screen");
const questionDiv = document.getElementById("question");
const answersDiv = document.getElementById("answers");

// Sample questions
const questions = [
  { q: "What is 5 + 3?", options: ["6", "8", "10"], answer: "8" },
  { q: "What is 9 - 4?", options: ["5", "6", "7"], answer: "5" },
  { q: "What is 3 × 3?", options: ["6", "9", "12"], answer: "9" }
];

let currentQuestion = 0;

// Start game
startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameArea.style.display = "block";
  showQuestion();
});

// Show question
function showQuestion() {
  const q = questions[currentQuestion];
  questionDiv.textContent = q.q;
  answersDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(option));
    answersDiv.appendChild(btn);
  });
}

// Check answer
function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      gameArea.style.display = "none";
      endScreen.style.display = "block";
    }
  } else {
    alert("Oops! Try again.");
  }
}

// Restart game
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  endScreen.style.display = "none";
  startScreen.style.display = "block";
});
