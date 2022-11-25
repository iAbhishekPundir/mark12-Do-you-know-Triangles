const inputBox = document.querySelectorAll(".input-angle");
const checkBtn = document.querySelector("#check-btn");
const outputText = document.querySelector("#output");

checkBtn.addEventListener("click", isTriangle);

function isTriangle() {
    const sum = calculateSum(
        Number(inputBox[0].value),
        Number(inputBox[1].value),
        Number(inputBox[2].value)
    );
    if (inputBox[0].value == "") {
        outputText.innerText = "Enter Angle 1";
    } else 
    if (inputBox[1].value == "") {
        outputText.innerText = "Enter Angle 2";
    } else 
    if (inputBox[2].value == "") {
        outputText.innerText = "Enter Angle 3";
    } else
        if (sum === 180) {
            outputText.innerText = "These angles can form a triangle.";
        } else {
            outputText.innerText = "These angles cannot form a triangle.";
        }

};

function calculateSum(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
};