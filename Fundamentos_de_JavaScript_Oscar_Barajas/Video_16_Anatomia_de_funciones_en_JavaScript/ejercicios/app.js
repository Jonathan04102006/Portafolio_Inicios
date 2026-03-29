/* 🧠 Ejercicio 1: Función simple con parámetros y return
🎯 Objetivo:

Practicar la estructura básica de una función: nombre, parámetros y retorno.

📌 Instrucciones:
Crea una función llamada presentarse.
Debe recibir 2 parámetros: nombre y edad.

Debe retornar un mensaje como:

Hola, me llamo Juan y tengo 20 años
Guarda el resultado en una variable.
Muestra el resultado en consola.
💡 Pistas:
Usa template literals (` `).
Recuerda usar return. */
console.log("****************************************************************");
function presentarse(nombre, edad) {
    return `Hola, me llamo ${nombre} y tengo ${edad} años.`;
}

const yo = presentarse('Jonathan', 19);
console.log(yo);

/* 🔧 Ejercicio 2: Función que retorna un objeto
🎯 Objetivo:

Entender cómo una función puede crear y retornar objetos.

📌 Instrucciones:
Crea una función llamada crearProducto.
Debe recibir:
nombre
precio

Debe retornar un objeto con:

{
  nombre: ...,
  precio: ...,
  disponible: true
}
Guarda el resultado en una variable.
Imprime el objeto en consola.
💡 Pistas:
Usa la forma corta de objetos {nombre, precio}.
Agrega manualmente disponible: true. */
console.log("****************************************************************");
const crearProducto = (nombre, precio) => {
    return {
        nombre,
        precio,
        disponible: true
    }
}

const producto = crearProducto('queso', 1.99);
console.log(producto);

/* ⚡ Ejercicio 3: Arrow function con valores por defecto
🎯 Objetivo:

Practicar arrow functions y parámetros por defecto.

📌 Instrucciones:
Crea una arrow function llamada crearMensaje.
Debe recibir:
mensaje
autor (por defecto 'Anónimo')

Debe retornar un objeto con:

{
  mensaje: ...,
  autor: ...,
  fecha: (fecha actual con Date.now())
}
Crea:
Un mensaje sin autor
Otro mensaje con autor
Muestra ambos en consola.
💡 Pistas:
Usa Date.now().
Usa return implícito o explícito (como en tu clase). */
console.log("****************************************************************");
const crearMensaje = (mensaje, autor = 'Anónimo') => {
    return {
        mensaje,
        autor,
        fecha: Date.now()
    }
};

const mensaje = crearMensaje('Plataformas digitales');
const mensaje2 = crearMensaje('Plataformas digitales', 'Ariel Pérez');
console.log(mensaje);
console.log(mensaje2);