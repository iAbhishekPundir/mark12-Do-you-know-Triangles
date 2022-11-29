const input = document.querySelectorAll(".input-length");
const btnCalculate = document.querySelector("#btn-calculate");
const textOutput = document.querySelector("#output");

btnCalculate.addEventListener("click", calculateHypotenuse);

function calculateSquare(a, b) {
    const sum = a*a + b*b;
    return sum;
};

function calculateHypotenuse() {
    const sum = calculateSquare(
        Number(input[0].value),
        Number(input[1].value)
    );
    if (input[0].value == "" || input[0].value <= 0 || input[1].value == "" || input[1].value <=0  ) {
        textOutput.innerText = "Enter values in all the fields and values must be > 0"
    }
    else {
    const hypotenuse = Math.sqrt(sum).toFixed(2);
    textOutput.innerText = "The length of hypotenuse is " + hypotenuse;
    };
};