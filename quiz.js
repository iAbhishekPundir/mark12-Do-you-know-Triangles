const formQuiz = document.querySelector(".form-quiz");
const btnSubmit = document.querySelector("#submit-btn");
const outputResult = document.querySelector("#output");

const correctAnswers = [
    "3",
    "180˚",
    "Obtuse",
    "Pythagoras",
    "Equilateral",
    "Scalene",
    "Isosceles",
    "70°",
    "1",
    "Acute"
]

btnSubmit.addEventListener("click", finalScore);

function finalScore() {
    const finalResults = new FormData(formQuiz);
    var score = 0;
    var index = 0;
    for (var value of finalResults.values()) {
        if (value == correctAnswers[index]) {
            score++;
            
        }
        index = index + 1;
    } 
    outputResult.innerText = "Your final score is " + score;
}