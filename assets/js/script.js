// console.log("Hello World");
// console.log("airplane");
let tool = "toothbrush"; // type: string
let numberCero = 7; // type: float
const num1 = 7; // type: float
const num2 = 2.2; // type: float
let bool = true; // type: boolean
let card;

const questions = {
  q1: {
    question:
      "What is the most significant event in the last Harry Potter book?",
    answers: {
      a1: "A huge monster caled the Vasilisk",
      a2: "The battle of Hoguarts",
      a3: "A monster called the Boggart",
    },
  },
};

const startButton = document.getElementById("run-button");
const introParagraph = document.getElementById("quiz-intro");
const questionBox = document.getElementById("create-questions");
const quizQuestion = document.getElementById("quizQuestion");

startButton.addEventListener("click", function (event) {
  startButton.classList.add("d-none");
  introParagraph.classList.add("d-none");

  quizQuestion.innerText = questions.q1.question;

  questionBox.classList.remove("d-none");
  console.log("Hello!");
});
console.dir(startButton);
