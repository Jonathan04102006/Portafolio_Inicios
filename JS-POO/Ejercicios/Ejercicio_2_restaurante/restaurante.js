// Clase Menú
class Menu {
    // Recibira un array de opciones (["Pizza", "Hamburguesa", "Ensalada"])
    constructor(opciones) {
        this._opciones = opciones;
    }

    mostrar() {
        this._opciones.forEach((opcion, index) => {
            console.log(`${index + 1}. ${opcion}`);
        });
    }

    obtenerOpcion(numero) {
        const idx = parseInt(numero, 10) - 1;
        if (idx >= 0 && idx < this._opciones.length) {
            return this._opciones[idx];
        }
    }
}