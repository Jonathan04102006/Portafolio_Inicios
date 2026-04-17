// PARTE 3 = https://www.youtube.com/watch?v=tbjsmXHqvoE
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

// ------
let objeto1 = {
    nombre: 'Daniel',
    edad: 25,
    hablar: function () {
        console.log('Hola me llamo ' + this.nombre);
    }
};

let objeto2 = {
    nombre: 'Juan',
    edad: 45,
    hablar: function () {
        console.log('Hola me llamo ' + this.nombre);
    }
};

objeto1.hablar();
objeto2.hablar();

console.log(Object.getPrototypeOf(objeto1) === Object.prototype);
console.log(Object.getPrototypeOf(objeto2) === Object.prototype);

Object.prototype.propiedadNueva = 'valor nuevo';

Object.prototype.metodo = function () {
    console.log('metodo en objeto Object.prototype.');
};

console.log(Object.prototype);
Object.prototype.metodo();
