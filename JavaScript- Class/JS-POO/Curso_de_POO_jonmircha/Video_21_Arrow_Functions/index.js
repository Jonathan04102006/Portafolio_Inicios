/* const saludar = function(){
    console.log(`Hola`);
}

saludar(); */

/* const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("Ariel"); */

const saludar = nombre => console.log(`Hola ${nombre}`);
saludar("Ariel");

/* const sumar = function (a, b) {
    return a + b;
} */

const sumar = (a, b) => a + b;
console.log(sumar(4, 2));

const funcionDeVariasLineas = () => {
    console.log(`Uno`);
    console.log(`Dos`);
    console.log(`Tres`);
}

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

/* numeros.forEach(function(el, index){
    console.log(`El elemento ${el} esta en la posición ${index}`)
}); */

numeros.forEach((el, index) => console.log(`El elemento ${el} esta en la posición ${index}`));

/* function Perro (){
    console.log(this);
}

Perro(); */

const perro = {
    nombre:'Kenai',
    ladrar/* : */ () /* => */ {
        console.log(this)
    }
}

perro.ladrar();