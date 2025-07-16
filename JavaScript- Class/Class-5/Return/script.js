const MINOMBRE="Jon";
const IVA=0.21;
saludar();
let cantidad=2;
let precio=4;
escribir(calcularIVA(cantidad*precio,cantidad,precio));

function saludar(){
    escribir(`Hola ${MINOMBRE}`);
}

function calcularIVA(resultado,cantidad, precio, IVA){
    let result=resultado*IVA;
    let suma=cantidad+precio;
    return {resultado: result,suma:suma}
}

function escribir(valor){
    let primerValor= valor.resultado;
    let segundoValor= valor.suma;
    document.querySelector(".caja").innerHTML+=`<div>${primerValor} (${segundoValor})</div>`;
}