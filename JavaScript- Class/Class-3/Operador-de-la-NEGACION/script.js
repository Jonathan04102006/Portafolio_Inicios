let caja=document.querySelector(".contenedor");
let numero1=3;
let numero2=2;
let numero3="3"
let nombre="Ari";

/**
 * ==
 * ===
 * !=
 * !==
 * >=
 * <=
 */

let resultado=numero1!==numero3;
dibujar(resultado);

function dibujar(valor){
    caja.innerHTML+=`<div>${valor}</div>`
};