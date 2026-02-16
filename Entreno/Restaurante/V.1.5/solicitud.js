function obtenerPlatos() {
    const parametros = new URLSearchParams(window.location.search);
    const platoFuerteSeleccionado = parametros.get("plato");

    if (platoFuerteSeleccionado) {
        return `<p><strong>Plato Fuerte:</strong> ${platoFuerteSeleccionado}</p>`;
    }
    
    const listaPlatosFuertes = platosFuertes.map(platillo => {
        return `<a href="paso2.html?plato=${encodeURIComponent(platillo)}">${platillo}</a>`;
    }).join(", ");

    return `<h3>NUESTRO MENU</h3>
    <p><strong>Platos Fuertes:</strong> ${listaPlatosFuertes}</p>`;
}

function obtenerBebidas() {
    const parametros = new URLSearchParams(window.location.search);
    const platoPrevio = parametros.get("plato");

    const bebidaSeleccionada = parametros.get("bebida");

    if (bebidaSeleccionada) {
        return `<p><strong>Bebida:</strong> ${bebidaSeleccionada}</p>`;
    }

    if (platoPrevio) {
        const lista = bebidas.map(bebida => {
            return `<a href="paso3.html?plato=${encodeURIComponent(platoPrevio)}&bebida=${encodeURIComponent(bebida)}">${bebida}</a>`;
        }).join(", ");
        return `<p><strong>Bebidas:</strong> ${lista}</p>`;
    }

    return `<p><strong>Bebidas:</strong> ${bebidas.join(", ")}</p>`;
}

function obtenerPostres() {
    const parametros = new URLSearchParams(window.location.search);
    const platoPrevio = parametros.get("plato");
    const bebidaPrevia = parametros.get("bebida");

    const postreSeleccionado = parametros.get("postre");

    if (postreSeleccionado) {
        return `<p><strong>Postre:</strong> ${postreSeleccionado}</p>`;
    }

    if (bebidaPrevia) {
        const lista = postres.map(postre => {
            return `<a href="paso4.html?plato=${encodeURIComponent(platoPrevio)}&bebida=${encodeURIComponent(bebidaPrevia)}&postre=${encodeURIComponent(postre)}">${postre}</a>`;
        }).join(", ");
        return `<p><strong>Postres:</strong> ${lista}</p>`;
    }

    return `<p><strong>Postres:</strong> ${postres.join(", ")}</p>`;
}