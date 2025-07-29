const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreScreen = document.getElementById("score-screen");
const scoreText = document.getElementById("score");

const quizData = [
  {
    question: "Which temple is known as the 'Big Temple'?",
    options: ["Madurai Meenakshi Temple", "Brihadeeswarar Temple", "Srirangam Temple", "Chidambaram Temple"],
    answer: "Brihadeeswarar Temple",
    fact: "Built by Raja Raja Chola I in the 11th century in Thanjavur."
  },
  {
    question: "Which snack is popular in Tamil Nadu?",
    options: ["Idiyappam", "Chakli", "Appam", "Paniyaram"],
    answer: "Paniyaram",
    fact: "Made from fermented rice batter, often served with chutney."
  },
  {
    question: "Which dance form originates from Tamil Nadu?",
    options: ["Kathak", "Bharatanatyam", "Kuchipudi", "Odissi"],
    answer: "Bharatanatyam",
    fact: "One of the oldest classical dance forms in India."
  }
];

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hide");
  quizContainer.classList.remove("hide");
  loadQuestion();
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.classList.add("hide");

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectAnswer(option, q.answer, q.fact));
    optionsEl.appendChild(li);
  });
}

function selectAnswer(selected, correct, fact) {
  if (selected === correct) score++;
  feedbackEl.innerHTML = `
    <strong>${selected === correct ? "✅ Correct!" : "❌ Incorrect."}</strong><br>${fact}
  `;
  Array.from(optionsEl.children).forEach(li => li.style.pointerEvents = "none");
  nextBtn.classList.remove("hide");
}

function showScore() {
  quizContainer.classList.add("hide");
  scoreScreen.classList.remove("hide");
  scoreText.textContent = `You scored ${score} out of ${quizData.length}.`;
}
