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
    if (input[0].value == "") {
        textOutput.innerText = "Enter Base length."
    } else
    if (input[1].value == "") {
        textOutput.innerText = "Enter Height length"
    } else {
    const hypotenuse = Math.sqrt(sum);
    textOutput.innerText = "The length of hypotenuse is " + hypotenuse;
    };
};