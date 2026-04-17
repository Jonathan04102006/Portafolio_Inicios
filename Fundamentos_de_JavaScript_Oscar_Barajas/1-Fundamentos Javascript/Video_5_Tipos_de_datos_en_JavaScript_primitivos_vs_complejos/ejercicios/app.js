/* 🧠 Ejercicio 1: Identificando tipos de datos
🎯 Objetivo:

Reconocer la diferencia entre tipos primitivos y complejos usando typeof.

📋 Instrucciones:
Declara las siguientes variables:
Un string con tu nombre
Un número con tu edad
Un booleano (true o false)
Un objeto con { pais: "El Salvador" }
Un arreglo con 3 colores
Usa console.log() para mostrar:
El valor
Su tipo con typeof
Indica en un comentario si es:
// Primitivo
// Complejo
💡 Ejemplo esperado:
const nombre = "Jonathan";
console.log(typeof nombre, nombre); // string → Primitivo */
console.log("****************************************************************");
const string = `Jonathan`;
const numero = 14;
const booleano = true;
const objeto = {
    pais: "El Salvador"
}
const arreglo = ["rojo", "negro", "morado"];
console.log(typeof string, typeof numero, typeof booleano, typeof objeto, typeof arreglo);

/* 🔍 Ejercicio 2: Diferencias entre copia por valor y referencia
🎯 Objetivo:

Entender cómo se comportan los datos primitivos vs complejos al copiarlos.

📋 Instrucciones:
Crea una variable primitiva:
let numero1 = 10;
let numero2 = numero1;
Cambia numero2 a otro valor.
Imprime ambos valores.
Ahora haz lo mismo con un objeto:
let objeto1 = { nombre: "Juan" };
let objeto2 = objeto1;
Cambia la propiedad nombre en objeto2.
Imprime ambos objetos.
❓ Pregunta:
¿Por qué el número no cambia pero el objeto sí?
💡 Pista:
Primitivos → copia independiente
Complejos → referencia al mismo espacio en memoria */
console.log("****************************************************************");
let numero1 = 10;
let numero2 = numero1;
console.log(numero1, numero2);

let objeto1 = { nombre: "Juan" };
let objeto2 = objeto1;
console.log(objeto1, objeto2);

/* ⚙️ Ejercicio 3: Clasificador de tipos
🎯 Objetivo:

Crear una función que identifique si un dato es primitivo o complejo.

📋 Instrucciones:
Crea una función:
function clasificarDato(dato) {
    // tu lógica aquí
}
La función debe:
Detectar el tipo con typeof
Retornar:
"Primitivo" si es:
string, number, boolean, null, undefined, symbol, bigint
"Complejo" si es:
object o function
Prueba la función con:
clasificarDato("hola");
clasificarDato(123);
clasificarDato({ nombre: "Ana" });
clasificarDato([1,2,3]);
clasificarDato(function(){});
⚠️ Importante:
typeof null devuelve "object" (caso especial)
💡 Ejemplo esperado:
console.log(clasificarDato("hola")); // Primitivo
console.log(clasificarDato({}));     // Complejo */
console.log("****************************************************************");
function clasificarDato(dato){
    return typeof dato;
}

console.log(clasificarDato("hola"));
console.log(clasificarDato(123));
console.log(clasificarDato({ nombre: "Ana" }));
console.log(clasificarDato([1, 2, 3]));
console.log(clasificarDato(function(){}));

function clasificarDato1(dato){
    const tipo = typeof dato;

    if (dato === null){
        return "Primitivo";
    }

    if (tipo === "object" || tipo === "function") {
        return "Complejo";
    } else {
        return "Primitivo";
    }
}

console.log(clasificarDato1("hola"));           // Primitivo
console.log(clasificarDato1(123));              // Primitivo
console.log(clasificarDato1({ nombre: "Ana" })); // Complejo
console.log(clasificarDato1([1, 2, 3]));        // Complejo
console.log(clasificarDato1(function(){}));     // Complejo   