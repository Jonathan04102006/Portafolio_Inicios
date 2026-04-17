var input = document.getElementById("userInput");
var paragraph = document.createElement("p");
paragraph.id = "dynamicText";
paragraph.textContent = "";
document.body.appendChild(paragraph);
input.addEventListener("input", function () {
    paragraph.textContent = input.value;
});
var clearButton = document.createElement("button");
clearButton.textContent = "Limpiar";
clearButton.style.marginTop = "10px";
document.body.appendChild(clearButton);
clearButton.addEventListener("click", function () {
    input.value = "";
    paragraph.textContent = "";
});
