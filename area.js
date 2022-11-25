const inputs = document.querySelectorAll(".length-input");
const calculateBtn = document.querySelector("#calculate-btn");
const outputEl = document.querySelector("#output");

calculateBtn.addEventListener("click", calculateArea);

function calculateArea() {
    const base = inputs[0].value;
    const height = inputs[1].value;
    if (base == "") {
        outputEl.innerText = "Enter base."
    } else
    if (height == "") {
        outputEl.innerText = "Enter height."
    } else {
    const area = 0.5 * base * height;
    outputEl.innerText = "The area of the triangle is " + area + " sq. cm.";
    };
};