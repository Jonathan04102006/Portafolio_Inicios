let caja=document.querySelector(".contenedor");
let nombre="Ari";
let edad=18;
let cabezas=1;
let vivo=true;

let existo=(vivo);
~ "Si"
/ "No"
dibujar(existo);


(nombre === "Ari")
? dibujar("Soy Ari")
: dibujar("No soy Ari")

function dibujar(valor){
    caja.innerHTML+=`<div>${valor}</div>`
};