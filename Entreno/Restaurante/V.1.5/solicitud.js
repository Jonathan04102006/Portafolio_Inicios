function navegar(clave, valor, destino) {
    localStorage.setItem(clave, valor);
    window.location.href = destino;
}

function obtenerPlatos() {
    const platoFuerteSeleccionado = localStorage.getItem("plato");

    if (platoFuerteSeleccionado) {
        return `<p><strong>Plato Fuerte:</strong> ${platoFuerteSeleccionado}</p>`;
    }
    
    const listaPlatosFuertes = platosFuertes.map(platillo => {
        return `<a href="#" onclick="navegar('plato', '${platillo}', 'paso2.html')">${platillo}</a>`;
    }).join(", ");

    return `<h3>NUESTRO MENU</h3>
    <p><strong>Platos Fuertes:</strong> ${listaPlatosFuertes}</p>`;
}

function obtenerBebidas() {
    const platoPrevio = localStorage.getItem("plato");
    const bebidaSeleccionada = localStorage.getItem("bebida");

    if (bebidaSeleccionada) {
        return `<p><strong>Bebida:</strong> ${bebidaSeleccionada}</p>`;
    }

    if (platoPrevio) {
        const lista = bebidas.map(bebida => {
            return `<a href="#" onclick="navegar('bebida', '${bebida}', 'paso3.html')">${bebida}</a>`;
        }).join(", ");
        return `<p><strong>Bebidas:</strong> ${lista}</p>`;
    }

    return `<p><strong>Bebidas:</strong> ${bebidas.join(", ")}</p>`;
}

function obtenerPostres() {
    const bebidaPrevia = localStorage.getItem("bebida");
    const postreSeleccionado = localStorage.getItem("postre");

    if (postreSeleccionado) {
        return `<p><strong>Postre:</strong> ${postreSeleccionado}</p>`;
    }

    if (bebidaPrevia) {
        const lista = postres.map(postre => {
            return `<a href="#" onclick="navegar('postre', '${postre}', 'paso4.html')">${postre}</a>`;
        }).join(", ");
        return `<p><strong>Postres:</strong> ${lista}</p>`;
    }

    return `<p><strong>Postres:</strong> ${postres.join(", ")}</p>`;
}