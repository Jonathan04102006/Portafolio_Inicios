let caja=document.querySelector(".contenedor");
let numero1=3;
let numero2=2;
let numero3="3"
let nombre="Ari";

//!
// false | 0 | "" | null | undefined | Nan 

numero2=!numero2;
dibujar(!numero2);
dibujar(numero2)

function dibujar(valor){
    caja.innerHTML+=`<div>${valor}</div>`
};