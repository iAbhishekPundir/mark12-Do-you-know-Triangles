const inputs = document.querySelectorAll(".length-input");
const calculateBtn = document.querySelector("#calculate-btn");
const outputEl = document.querySelector("#output");

calculateBtn.addEventListener("click", calculateArea);

function calculateArea() {
    const base = Number(inputs[0].value);
    const height = Number(inputs[1].value);
    if (base == "" || base <0 || height == "" || height <0) {
        outputEl.innerText = "Fill all the field's value and must be > 0"
    } 
    else {
    const area = 0.5 * base * height;
    outputEl.innerText = "The area of the triangle is " + area + " sq. cm.";
    };
};