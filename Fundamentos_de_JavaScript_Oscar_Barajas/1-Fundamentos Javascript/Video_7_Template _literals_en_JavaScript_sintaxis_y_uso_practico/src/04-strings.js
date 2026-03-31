// Strings

const nombre = 'JavaScript';
const version = 'ES6';

console.log(nombre, version);

const mensaje = 'Bienvenido a ' + nombre + ' version: ' + version;
console.log(mensaje);

// Template literals

const mensaje2 = `Bienvenidos y bienvenidas a el curso de ${nombre}, en su version: ${version}`;
console.log(mensaje2);

// Expresiones

const precio = 100;
const cantidad = 3;
const total = `Total: ${precio * cantidad}`;
console.log(total);

//Miltilinea

const nota = `
# Mi nota
Este es el contenido

- Nota 1
- Nota 2
`;