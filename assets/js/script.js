// console.log("Hello World");
// console.log("airplane");
let tool = "toothbrush"; // type: string
let numberCero = 7; // type: float
const num1 = 7; // type: float
const num2 = 2.2; // type: float
let bool = true; // type: boolean
let card;
const startButton = document.getElementById("run-button");
const introParagraph = document.getElementById("quiz-intro");
startButton.addEventListener("click", function (event) {
  startButton.classList.add("d-none");
  introParagraph.classList.add("d-none");
  console.log("Hello!");
});
console.dir(startButton);
