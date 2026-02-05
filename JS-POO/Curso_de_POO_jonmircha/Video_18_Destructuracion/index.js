const numeros = [1, 2, 3];

// Sin destructuracion
/* let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres); */

// Con destructuracion
const [one, two, three] = numeros;
console.log(one, two, three);

let persona = {
    nombre: "Jona",
    apellido: "Perez",
    edad: 19
};

let { nombre, apellido, edad } = persona;
console.log( nombre, apellido, edad);

/*
La desestructuración en JavaScript es una sintaxis de asignación que permite extraer valores de arreglos (arrays) o propiedades de objetos y asignarlos directamente a variables nuevas de forma concisa. Sirve para hacer el código más limpio, legible y eficiente, reduciendo la repetición al acceder a datos.

Principales usos y beneficios:
Extracción directa: Extrae múltiples propiedades de un objeto o elementos de un array en una sola línea.
Código más legible: Evita tener que escribir repetidamente objeto.propiedad o índices de array como array[0].
Valores predeterminados: Permite asignar valores por defecto si la propiedad o elemento no existe, evitando errores undefined.
Renombrado de variables: Es posible extraer un valor y asignarlo a una variable con un nombre diferente al de la propiedad original.
Manejo de parámetros: Se utiliza en funciones para recibir objetos y extraer sus propiedades directamente en la firma de la función, facilitando la lectura de los parámetros necesarios.

Ejemplos básicos:
Objetos: const { nombre, edad } = persona; en lugar de const nombre = persona.nombre;.
Arrays: const [primero, segundo] = lista;.
*/