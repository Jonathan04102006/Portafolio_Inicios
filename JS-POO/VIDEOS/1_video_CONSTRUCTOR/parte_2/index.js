// PARTE 2 = https://www.youtube.com/watch?v=zKq2ETPJOxA

function crearPersona(nombre) {
    let objeto = {}; // inicializando un objeto vacío, un objeto limpio.

    /* Llenamos ese objeto vacío para después retornarlo. */
    objeto.nombre = nombre;
    objeto.hablar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
    };

    return objeto;
}

/*
Cuando se llama a un constructor, hará lo siguiente:
1. creará un nuevo objeto
2. vinculará "this" al nuevo objeto, para que puedas referirte a él en el código del constructor
3. ejecutará el código en el constructor
4. devuelve el nuevo objeto
*/

function Persona(nombre) {
    this.nombre = nombre;
    this.hablar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
    };

    /* return this */ // así se vería tras bambalinas.
}

let danielito = new Persona('Daniel');
console.log(danielito.nombre);
danielito.hablar();

let juan = new Persona('Juan');
console.log(juan.nombre);
juan.hablar();
