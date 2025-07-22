let caja=document.querySelector(".contenedor");
let numero1=5;
let numero2=2;
let numero3="3"
let nombre="Ari";

// + - + *

let resultado=numero1/numero3;
dibujar(resultado);

dibujar(numero1++);
dibujar(++numero2);


function dibujar(valor){
    caja.innerHTML+=`<div>${valor}</div>`
};