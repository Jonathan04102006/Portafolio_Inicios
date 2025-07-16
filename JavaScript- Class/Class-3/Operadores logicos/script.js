let caja=document.querySelector(".contenedor");
let nombre="Ari";
let edad=18;
let cabezas=1;

// operadores logicos (&& y ||)

((true || edad>18) && cabezas==1)
? dibujar("Soy Ari")
: dibujar("No soy Ari")

function dibujar(valor){
    caja.innerHTML+=`<div>${valor}</div>`
};