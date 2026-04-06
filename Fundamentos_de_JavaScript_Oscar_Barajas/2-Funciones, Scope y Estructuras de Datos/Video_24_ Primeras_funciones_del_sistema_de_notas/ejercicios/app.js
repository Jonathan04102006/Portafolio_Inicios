/* 🟢 Ejercicio 1: Crear una función para generar una nota

🎯 Objetivo:
Practicar funciones, parámetros y validaciones básicas.

📝 Instrucciones:

Crea una función llamada crearNota que:

Reciba 2 parámetros:
titulo
contenido
Valide que el contenido no esté vacío:
Si está vacío → retornar: "Error: contenido vacío"
Retorne un objeto con esta estructura:
{
  titulo: '...',
  contenido: '...',
  fechaCreacion: '...'
}
La fecha debe generarse usando:
new Date().toLocaleString()

✍️ Ejemplo de uso esperado:

const nota = crearNota('Mi nota', 'Aprendiendo funciones');
console.log(nota); */
console.log("****************************************************************");
function crearNota(titulo, contenido) {
    if (!contenido || contenido.trim() === '') {
        return `Error: contenido vacío`;
    }

    return {
        titulo: titulo,
        contenido: contenido,
        fechaDeCreacion: new Date().toLocaleDateString()
    };
}

const nota = crearNota('Mi nota', 'Aprendiendo funciones');
console.log(nota);

/* 🟢 Ejercicio 2: Actualizar el contenido de una nota

🎯 Objetivo:
Modificar objetos usando funciones.

📝 Instrucciones:

Crea una función llamada actualizarContenido que:

Reciba:
nota (un objeto)
nuevoContenido
Valide:
Si nuevoContenido está vacío → retornar error.
Si es válido:
Actualiza la propiedad contenido
Agrega una nueva propiedad:
fechaActualizacion: '...'
Retorna la nota actualizada.

✍️ Ejemplo:

const nota = crearNota('Título', 'Texto inicial');
const notaActualizada = actualizarContenido(nota, 'Nuevo texto');
console.log(notaActualizada); */
console.log("****************************************************************");
function actualizarContenido(nota, nuevoContenido) {
    if(!nuevoContenido || nuevoContenido.trim() === '') {
        return `Error: contenido vacío`;
    }

    nota.contenido = nuevoContenido;
    nota.fechaActualizada = new Date().toLocaleDateString;

    return nota;
}

/* const nota1 = crearNota('Titulo', 'Texto inicial'); */
console.log(nota);
const notaActualizada = actualizarContenido(nota, 'Nuevo contenido');
console.log(notaActualizada);

/* 🟢 Ejercicio 3: Manejar varias notas

🎯 Objetivo:
Trabajar con arrays y funciones simples tipo CRUD.

📝 Instrucciones:

Crea un array vacío:
const notas = [];
Crea una función agregarNota que:
Reciba titulo y contenido
Cree una nota (puedes reutilizar crearNota)
La agregue al array
Crea una función listarNotas que:
Retorne todas las notas
Crea una función eliminarNota que:
Reciba el índice de la nota
La elimine del array

✍️ Ejemplo:

agregarNota('Nota 1', 'Contenido 1');
agregarNota('Nota 2', 'Contenido 2');

console.log(listarNotas());

eliminarNota(0);

console.log(listarNotas());
🚀 Lo que practicas con estos ejercicios
Crear funciones desde cero
Validaciones simples
Manipulación de objetos
Uso de arrays como almacenamiento
Bases de un CRUD sin depender de código previo */
console.log("****************************************************************");
const notas = [];

function agregarNota(titulo, contenido) {
  const nota = crearNota(titulo, contenido);
  if (typeof nota === 'object') {
    notas.push(nota);
  }
  return nota;
}

function listarNotas() {
  return notas;
}

function eliminarNota(indice) {
  if (indice >= 0 && indice < notas.length) {
    notas.splice(indice, 1);
  } else {
    return "Error: índice fuera de rango";
  }
}

// Ejemplo de uso:
agregarNota('Nota 1', 'Contenido 1');
agregarNota('Nota 2', 'Contenido 2');

console.log(listarNotas());

eliminarNota(0);

console.log(listarNotas());   