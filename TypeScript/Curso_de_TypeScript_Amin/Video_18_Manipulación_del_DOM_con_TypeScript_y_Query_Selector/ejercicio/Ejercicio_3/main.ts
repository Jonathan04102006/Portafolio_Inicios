const input = document.getElementById("userInput") as HTMLInputElement;

const paragraph = document.createElement("p");
paragraph.id = "dynamicText";
paragraph.textContent = "";

document.body.appendChild(paragraph);

input.addEventListener("input", () => {
    paragraph.textContent = input.value;
});

const clearButton = document.createElement("button");
clearButton.textContent = "Limpiar";
clearButton.style.marginTop = "10px";

document.body.appendChild(clearButton);

clearButton.addEventListener("click", () => {
    input.value = "";
    paragraph.textContent = "";
});