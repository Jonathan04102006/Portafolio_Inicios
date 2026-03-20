document.addEventListener("DOMContentLoaded", function () {
    var titulo = document.querySelector("h1.title");
    var input = document.querySelector("#message");
    if (titulo && input) {
        titulo.textContent = "Aprendiendo TypeScript con el DOM";
        console.log("Nuevo texto del título:", titulo.textContent);
        input.addEventListener("input", function () {
            titulo.textContent = input.value;
        });
    }
    else {
        console.warn("No se encontró el h1 o el input");
    }
});
