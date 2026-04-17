// PARTE 1 = https://www.youtube.com/watch?v=3rjQ1RcAMZQS
function crearPersona(nombre) {
    let objeto = {}; // inicializando un objeto vacío, un objeto limpio.

    /* Llenamos ese objeto vacío para después retornarlo. */
    objeto.nombre = nombre;
    objeto.hablar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
    };

    return objeto;
}

let danielito = crearPersona('Daniel');
console.log(danielito.nombre);
danielito.hablar();

let juan = crearPersona('Juan');
console.log(juan.nombre);
juan.hablar();
