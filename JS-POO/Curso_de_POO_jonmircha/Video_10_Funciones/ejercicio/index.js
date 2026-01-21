/* Crea una función declarada que muestre en consola tres líneas de texto diferentes y ejecútala dos veces.
*/
console.log("******************ejercicio 1 de funciones******************");
console.log(nuevaFuncion());
function nuevaFuncion() {
    console.log(`Hola`)
    console.log(`como`)
    console.log(`estas?`)
};
console.log(nuevaFuncion());

/* Crea una función que reciba dos parámetros (nombre y ciudad), use valores por defecto y retorne una cadena con un mensaje personalizado.
*/
console.log("******************ejercicio 2 de funciones******************");
function misDatos(nombre = "Jonathan Perez", ciudad = "San Salvador"){
    return `Hola soy ${nombre} y en la ciudad que vivo es en ${ciudad}.`
};
console.log(misDatos());

/* Crea una función expresada (anónima) asignada a una constante que reciba un número y muestre en consola si el número es par o impar.
*/
console.log("******************ejercicio 3 de funciones******************");
const verificarNumero = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} es un numero par.`);
    } else {
        console.log(`${numero} es numero inpar.`);
    }
};

console.log(verificarNumero(3));