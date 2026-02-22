/* 1️⃣ Ejercicio – Uso de any y unknown

Crea:

Una variable llamada datoFlexible de tipo any y asígnale primero un número y luego un string.

Una variable llamada datoDesconocido de tipo unknown.

Intenta asignar datoDesconocido a una variable de tipo string.

Luego valida el tipo usando typeof antes de hacer la asignación correctamente. */
console.log("***************ejercicio 1 de any, unknown, never y void***************");
var datoFlexible;
var datoDesconocido;
datoFlexible = 19;
console.log(datoFlexible);
datoFlexible = "Ariel";
console.log(datoFlexible);
datoDesconocido = "Resident Evil 2";
if (typeof datoDesconocido === "string") {
    console.log("El juego seleccionado es: ".concat(datoDesconocido));
}
/* 2️⃣ Ejercicio – Funciones con void

Crea:

Una función llamada mostrarMensaje que reciba un parámetro mensaje de tipo string.

La función debe imprimir el mensaje en consola.

Especifica explícitamente que la función retorna void.

Llama la función con al menos dos mensajes diferentes. */
console.log("***************ejercicio 2 de any, unknown, never y void***************");
function mostrarMensaje(mensaje) {
    console.log("Imprimiendo: ".concat(mensaje));
}
mostrarMensaje("Este es mensaje");
mostrarMensaje("Soy string");
/* 3️⃣ Ejercicio – Uso de never

Crea:

Una función llamada errorCritico que reciba un mensaje de tipo string.

La función debe lanzar un error usando throw new Error().

Especifica que el tipo de retorno de la función es never.

Crea otra función que llame a errorCritico dentro de una condición. */
console.log("***************ejercicio 3 de any, unknown, never y void***************");
function errorCritico(mensaje) {
    throw new Error(mensaje);
}
function verificarEstado(estado) {
    if (estado === "normal") {
        errorCritico("Error critico XD");
    }
    else {
        console.log("Estado: ".concat(estado));
    }
}
verificarEstado("normal");
