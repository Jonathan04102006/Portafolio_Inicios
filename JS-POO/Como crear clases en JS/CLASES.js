// CLASES - JAVASCRIPT

class Player{
    constructor(nombre, colorSombrero){
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }
    saltar(){}
    correr(){}
    saludar(){
        return `Hola soy${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}

let player1 = new Player('MARIO', 'ROJO');
let player2 = new Player('LUIGUI', 'VERDE');


// GET
console.log(player1.nombre); MARIO

// SET
player1.nombre = 'ALBERTO';
console.log(player1.nombre); ALBERTO