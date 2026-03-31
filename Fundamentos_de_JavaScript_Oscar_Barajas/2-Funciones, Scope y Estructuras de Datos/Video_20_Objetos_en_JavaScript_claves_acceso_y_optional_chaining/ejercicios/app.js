/* 🧠 Ejercicio 1: Acceso a propiedades (dot vs bracket)
🎯 Objetivo:

Practicar cómo acceder a propiedades de un objeto usando notación punto (.) y corchetes ([]).

📋 Instrucciones:
Crea un objeto llamado usuario con las siguientes propiedades:
id
nombre
email
Muestra en consola:
El nombre usando notación punto
El email usando notación corchetes (usa una variable)
💡 Ejemplo esperado:
const usuario = {
    id: 1,
    nombre: 'Juan',
    email: 'juan@email.com'
};

console.log(usuario.nombre);

const campo = 'email';
console.log(usuario[campo]); */
console.log("****************************************************************");
const usuario = {
    id: 1,
    nombre: 'Jona',
    email: 'jona@gmail.com'
}

console.log(usuario.nombre);

const campo = 'email';
console.log(usuario[campo]);

/* 🧠 Ejercicio 2: Acceso dinámico a claves
🎯 Objetivo:

Entender cómo acceder a propiedades dinámicamente con variables.

📋 Instrucciones:
Crea un objeto llamado producto con:
nombre
precio
disponible (true o false)
Crea una variable llamada propiedad que tenga como valor "precio".
Muestra en consola el valor de esa propiedad usando:
corchetes ([])
Cambia el valor de propiedad a "nombre" y vuelve a mostrarlo.
💡 Ejemplo esperado:
const producto = {
    nombre: 'Laptop',
    precio: 800,
    disponible: true
};

let propiedad = 'precio';
console.log(producto[propiedad]);

propiedad = 'nombre';
console.log(producto[propiedad]); */
console.log("****************************************************************");
const producto = {
    nombre: 'Laptop',
    precio: 800,
    disponible: true
};

let propiedad = 'precio';
console.log(producto[propiedad]);

propiedad = 'nombre';
console.log(producto[propiedad]);

/* 🧠 Ejercicio 3: Optional Chaining (?.)
🎯 Objetivo:

Aprender a evitar errores cuando una propiedad no existe usando optional chaining.

📋 Instrucciones:
Crea un objeto llamado post con:
titulo
descripcion
autor (objeto con propiedad nombre)
Muestra en consola:
El nombre del autor normalmente (post.autor.nombre)
Luego intenta mostrar:
post.editor.nombre (⚠️ esta propiedad NO existe)
Soluciona el error usando:
optional chaining (?.)
💡 Ejemplo esperado:
const post = {
    titulo: 'Aprendiendo JS',
    descripcion: 'Objetos en JavaScript',
    autor: {
        nombre: 'Carlos'
    }
};

console.log(post.autor.nombre);

// Esto daría error:
// console.log(post.editor.nombre);

// Solución:
console.log(post.editor?.nombre); */
console.log("****************************************************************");
const post = {
    titulo: 'Aprendiendo JS',
    descripcion: 'Objetos en JavaScript',
    autor: {
        nombre: 'Carlos'
    }
};

console.log(post.autor.nombre);

console.log(post.editor?.nombre);