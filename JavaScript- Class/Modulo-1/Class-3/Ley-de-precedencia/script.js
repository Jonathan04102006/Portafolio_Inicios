let caja=document.querySelector(".contenedor");
let nombre="Ari";
let edad=18;
let cabezas=1;

/**
 *  PRIMERO ()= parentesis
 *  SEGUNDO ^= exponentes
 *  TERCERO * y / multiplicacion y division
 *  CUARTO + y - suma y resta
 */

function dibujar(valor){
    caja.innerHTML+=`<div>${valor}</div>`
};