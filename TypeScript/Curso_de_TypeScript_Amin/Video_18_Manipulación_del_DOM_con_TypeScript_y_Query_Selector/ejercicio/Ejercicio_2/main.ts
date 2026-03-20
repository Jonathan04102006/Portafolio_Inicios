document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1.title") as HTMLHeadingElement | null;
    const input = document.querySelector("#message") as HTMLInputElement | null;

    if (titulo && input) {
        titulo.textContent = "Aprendiendo TypeScript con el DOM";
        console.log("Nuevo texto del título:", titulo.textContent);

        input.addEventListener("input", () => {
            titulo.textContent = input.value;
        });
    } else {
        console.warn("No se encontró el h1 o el input");
    }
});