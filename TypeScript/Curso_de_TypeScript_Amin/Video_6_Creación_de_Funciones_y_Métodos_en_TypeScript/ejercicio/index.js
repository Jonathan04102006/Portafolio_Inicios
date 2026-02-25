/* ✅ Ejercicio 1: Función con parámetro opcional

Crea una función llamada saludarUsuario que reciba un parámetro nombre de tipo string y un parámetro opcional edad de tipo number.

La función debe imprimir un mensaje como:

"Hola Juan" si no se envía la edad.

"Hola Juan, tienes 20 años" si se envía la edad.

La función no debe retornar nada (void). */
console.log("*********************ejercicio 1 de Creaci\u00F3n de Funciones y M\u00E9todos en TypeScript*********************");
function saludarUsuario(nombre, edad) {
    if (edad !== undefined) {
        console.log("Hola ".concat(nombre, ", tienes ").concat(edad, " a\u00F1os"));
    }
    else {
        console.log("Hola ".concat(nombre));
    }
}
saludarUsuario("Ariel");
saludarUsuario("Jonathan", 19);
/* ✅ Ejercicio 2: Función con valor por defecto

Crea una función llamada calcularDescuento que reciba:

precio (number)

descuento (number) con valor por defecto de 0.10 (10%)

La función debe retornar el precio final aplicando el descuento.
Luego imprime el resultado en consola. */
console.log("*********************ejercicio 2 de Creaci\u00F3n de Funciones y M\u00E9todos en TypeScript*********************");
function calcularDescuento(precio, descuento) {
    if (descuento === void 0) { descuento = 0.10; }
    var precioFinal = precio - (precio * descuento);
    return precioFinal;
}
var resultado = calcularDescuento(100);
var resultado1 = calcularDescuento(100, 0.30);
console.log("Precio final (10% de descuento): $".concat(resultado));
console.log("Precio final (30% de descuento): $".concat(resultado1));
/* ✅ Ejercicio 3: Método dentro de un objeto

Crea un objeto llamado persona con las siguientes propiedades:

nombre (string)

edad (number)

Agrega un método llamado presentarse que retorne un mensaje como:
"Hola, mi nombre es Carlos y tengo 25 años"

Luego muestra el resultado en consola llamando al método. */
console.log("*********************ejercicio 3 de Creaci\u00F3n de Funciones y M\u00E9todos en TypeScript*********************");
var persona = {
    nombre: "Jonathan",
    edad: 19,
    presentarse: function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    }
};
console.log(persona.presentarse());
