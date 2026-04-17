/* Crea una función declarada que muestre en consola tres líneas de texto diferentes y ejecútala dos veces.
*/
console.log("******************ejercicio 1 de funciones******************");
nuevaFuncion();
function nuevaFuncion(nombre = "Jonathan"){
    console.log(`Hola soy ${nombre}`);
};
nuevaFuncion();

/* Crea una función que reciba dos parámetros (nombre y ciudad), use valores por defecto y retorne una cadena con un mensaje personalizado.
*/
console.log("******************ejercicio 2 de funciones******************");
function misDatos(nombre = "Jonathan Perez", ciudad = "San Salvador"){
    return `Hola soy ${nombre} y en la ciudad que vivo es en ${ciudad}.`
};
misDatos();

/* Crea una función expresada (anónima) asignada a una constante que reciba un número y muestre en consola si el número es par o impar.
*/
console.log("******************ejercicio 3 de funciones******************");
const verificarNumero = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} es un numero par.`);
    } else {
        console.log(`${numero} es un numero inpar.`);
    }
};

verificarNumero(7);

function Saludar() {
    return `Hola de nuevo`;
};

console.log(Saludar());

function verificacion() {
    return true;
}

console.log(verificacion());


function verificacion1() {
    return 0;
}

console.log(verificacion1());


function verificacion2() {
    var bandera = false;
    return bandera == 0 ? true : false;
}

console.log(verificacion2());