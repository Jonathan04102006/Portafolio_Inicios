function obtenerPlatos() {
    const listaPlatosFuertes = platoFuerte.map(platillo => {
        return `<a href="paso2.html">${platillo}</a>`;
    }).join(", ");

    return `<h3>NUESTRO MENU</h3>
    <p><strong>Platos Fuertes:</strong> ${listaPlatosFuertes}</p>`;
}

function obtenerBebidas() {
    return `<p><strong>Bebidas:</strong> ${bebida.join(", ")}</p>`;
}

function obtenerPostres() {
    return `<p><strong>Postres:</strong> ${postre.join(", ")}</p>`;
}

/* function mostrarPlatos() {
    const contenedor = document.getElementById("platosFuertes");
    const mostrarPlatosFuertes = platoFuerte.map(platillo => {
        return `<div><button id ="platoFuerte" onclick="seleccionarPlato('${platillo}')">${platillo}</button></div>`;
    }).join("");

    contenedor.innerHTML = mostrarPlatosFuertes;
} */

/* function seleccionarPlato(nombre) {
    console.log("Seleccionaste: " + nombre);
} */








   
// SE UBICARA EN SOLICITUD.JS
/* function bebida(){

} */

// SE UBICARA EN SOLICITUD.JS
/* function postre(){

} */