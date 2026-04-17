/* 🧠 Ejercicio 1: Destructuración básica
📌 Instrucciones:

Crea un objeto llamado usuario con las siguientes propiedades:

id
nombre
email

Luego:

Extrae las propiedades usando destructuración
Guarda los valores en variables con el mismo nombre
Muestra los valores en consola
💡 Ejemplo esperado:
const usuario = {
    id: 10,
    nombre: 'Juan',
    email: 'juan@gmail.com'
};

// Tu código aquí
🎯 Objetivo:

Practicar:

const { propiedad } = objeto */
console.log("****************************************************************");
const usuario = {
    id: 10,
    nombre: 'Juan',
    email: 'juan@gmail.com'
};

const { id, nombre, email } = usuario;

console.log(id);     // 10
console.log(nombre); // Juan
console.log(email);  // juan@gmail.com   

/* 🧠 Ejercicio 2: Destructuración con cambio de nombre (alias)
📌 Instrucciones:

Usa este objeto:

const producto = {
    id: 5,
    nombre: 'Laptop',
    precio: 800
};

Luego:

Desestructura el objeto
Cambia el nombre de:
nombre → nombreProducto
precio → costo
Imprime las nuevas variables
💡 Resultado esperado:
// Debe imprimir:
Laptop 800
🎯 Objetivo:

Practicar:

Renombrar variables en destructuración
const { nombre: nombreProducto } = producto; */
console.log("****************************************************************");
const producto = {
    id: 5,
    nombre: 'Laptop',
    precio: 800
};

const { nombre: nombreProducto, precio: costo } = producto;

console.log(nombreProducto, costo); // Laptop 800

/* 🧠 Ejercicio 3: Destructuración + valores por defecto
📌 Instrucciones:

Crea este objeto:

const nota = {
    id: 1,
    title: 'Aprendiendo JS'
};

Luego:

Desestructura:
title
content (pero este NO existe en el objeto)
Asigna un valor por defecto a content: "Sin contenido"
Muestra ambos valores en consola
💡 Resultado esperado:
Aprendiendo JS Sin contenido
🎯 Objetivo:

Practicar:

Valores por defecto en destructuración
const { content = 'valor por defecto' } = objeto; */
console.log("****************************************************************");
const nota = {
    id: 1,
    title: 'Aprendiendo JS'
};

const { title, content = 'Sin contenido' } = nota;

console.log(title, content);