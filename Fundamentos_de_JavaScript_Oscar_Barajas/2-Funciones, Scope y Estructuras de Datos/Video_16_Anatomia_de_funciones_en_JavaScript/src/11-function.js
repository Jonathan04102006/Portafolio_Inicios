// Function

function saludar(nombre){
    return `Hola, ${nombre}`;
}

const mensaje = saludar('Jonathan');
const mensaje2 = saludar('Ariel');
console.log(mensaje, mensaje2);

// Parámetros / Argumentos

function crearUsuario(nombre, edad) {
    // ...
    return {nombre , edad};
}

const usuario = crearUsuario('Eli', 24);

console.log(usuario);

// Arrow function

const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5));


const crearNota = (conetenido, titulo = 'Sin titulo') => {
    return {
        titulo,
        conetenido,
        crear: Date.now()
    }
};

const nota1 = crearNota('Mi contenido');
const nota2 = crearNota('Otro contenido', 'Mi nota');

console.log(nota1);
console.log(nota2);