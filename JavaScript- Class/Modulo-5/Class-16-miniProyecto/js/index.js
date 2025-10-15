leer();
document.querySelector(".compra").addEventListener("click", guardar);
document.querySelector("#producto").value = "";
document.querySelector("#producto").addEventListener("keydown", teclado);

function teclado(e) {
    if (e.key === "Enter") {
        guardar();
    }
}

function guardar() {
    const input = document.querySelector("#producto");
    const escrito = input.value.trim();

    if (escrito) {
        const dato = { aGuardar: escrito };

        fetch("php/insertar.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dato)
        })
        .then(res => res.json())
        .then(data => {
            input.value = "";
            leer();
        });
    }
}

function eliminar(id) {
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;

    fetch("php/eliminar.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: id })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "ok") {
            leer();
        } else {
            alert("Error al eliminar: " + (data.error || "Desconocido"));
        }
    });
}

function leer() {
    fetch("php/leer.php")
        .then(res => {
            if (!res.ok) throw new Error("Error en la red");
            return res.json();
        })
        .then(data => {
            const caja = document.querySelector(".caja");
            if (!caja) {
                console.error("No se encontró el contenedor .caja");
                return;
            }

            if (data.length === 0) {
                caja.innerHTML = "<p>No hay productos en la lista.</p>";
                return;
            }
            let html = "<ul>";
            data.forEach(item => {
                html += `
                    <li>
                        ${item.productos}
                        <button class="eliminar" data-id="${item.id}">Eliminar</button>
                    </li>
                `;
            });
            html += "</ul>";
            caja.innerHTML = html;
            document.querySelectorAll(".eliminar").forEach(btn => {
                btn.addEventListener("click", () => eliminar(btn.dataset.id));
            });
        })
        .catch(err => {
            console.error("Error al cargar la lista:", err);
            document.querySelector(".caja").innerHTML = "<p>Error al cargar los productos.</p>";
        });
}