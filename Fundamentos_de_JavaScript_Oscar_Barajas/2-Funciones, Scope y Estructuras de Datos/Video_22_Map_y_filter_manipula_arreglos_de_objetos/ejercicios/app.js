/* 🟢 Ejercicio 1: Extraer información con map()
🎯 Objetivo:

Practicar cómo usar map() para transformar un arreglo de objetos en otro arreglo con datos específicos.

📝 Instrucciones:

Dado el siguiente arreglo:

const productos = [
    { id: 1, nombre: 'Laptop', precio: 800 },
    { id: 2, nombre: 'Mouse', precio: 20 },
    { id: 3, nombre: 'Teclado', precio: 50 }
];

Debes:

Crear un nuevo arreglo llamado nombresProductos que contenga solo los nombres de los productos.
Crear otro arreglo llamado productosConIVA donde:
Mantengas todas las propiedades originales.
Agregues una nueva propiedad llamada precioConIVA.
El IVA será del 13%.
📌 Resultado esperado (ejemplo):
['Laptop', 'Mouse', 'Teclado']

[
  { id: 1, nombre: 'Laptop', precio: 800, precioConIVA: 904 },
  ...
] */
console.log("****************************************************************");
const productos = [
    { id: 1, nombre: 'Laptop', precio: 800 },
    { id: 2, nombre: 'Mouse', precio: 20 },
    { id: 3, nombre: 'Teclado', precio: 50 }
];

const nombresProductos = productos.map((producto) => producto.nombre);
console.log(nombresProductos);

const productosConIVA = productos.map((producto) => ({
    ...producto,
    precioConIVA: Number((producto.precio * 1.13).toFixed(2))
}));

console.log(productosConIVA);

/* 🟡 Ejercicio 2: Filtrar datos con filter()
🎯 Objetivo:

Aprender a filtrar elementos de un arreglo según una condición.

📝 Instrucciones:

Dado el siguiente arreglo:

const usuarios = [
    { id: 1, nombre: 'Juan', activo: true },
    { id: 2, nombre: 'Ana', activo: false },
    { id: 3, nombre: 'Carlos', activo: true }
];

Debes:

Crear un arreglo llamado usuariosActivos que contenga solo los usuarios activos.
Crear otro arreglo llamado usuariosInactivos que contenga solo los usuarios inactivos.
📌 Resultado esperado:
// Activos
[
  { id: 1, nombre: 'Juan', activo: true },
  { id: 3, nombre: 'Carlos', activo: true }
]

// Inactivos
[
  { id: 2, nombre: 'Ana', activo: false }
] */
const usuarios = [
    { id: 1, nombre: 'Juan', activo: true },
    { id: 2, nombre: 'Ana', activo: false },
    { id: 3, nombre: 'Carlos', activo: true }
];

const usuariosActivos = usuarios.filter(usuario => usuario.activo);

const usuariosInactivos = usuarios.filter(usuario => !usuario.activo);

console.log(usuariosActivos);
console.log(usuariosInactivos);

/* 🔵 Ejercicio 3: Combinar map() + filter()
🎯 Objetivo:

Usar ambos métodos juntos para filtrar y luego transformar datos.

📝 Instrucciones:

Dado el siguiente arreglo:

const tareas = [
    { id: 1, titulo: 'Estudiar JS', completada: true },
    { id: 2, titulo: 'Hacer ejercicio', completada: false },
    { id: 3, titulo: 'Leer libro', completada: true }
];

Debes:

Filtrar solo las tareas que estén completadas.
A partir del resultado, crear un nuevo arreglo que contenga solo los títulos de esas tareas.

💡 Pista: primero usa filter() y luego map().

📌 Resultado esperado:
['Estudiar JS', 'Leer libro'] */
console.log("****************************************************************");
const tareas = [
    { id: 1, titulo: 'Estudiar JS', completada: true },
    { id: 2, titulo: 'Hacer ejercicio', completada: false },
    { id: 3, titulo: 'Leer libro', completada: true }
];

const resultado = tareas.filter(tarea => tarea.completada).map((nombre) => nombre.titulo);
console.log(resultado);