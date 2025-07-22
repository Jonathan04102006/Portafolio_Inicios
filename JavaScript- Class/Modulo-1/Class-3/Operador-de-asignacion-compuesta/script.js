let caja=document.querySelector(".contenedor");
let numero1=2;
let numero2=3;
let nombre="Ari";

numero1+=10;
dibujar(numero1);
numero2-=2;
dibujar(numero2);

function dibujar(valor){
    caja.innerHTML+=`<div>${valor}</div>`
}