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
    return resultado*IVA
}

function escribir(valor){
    document.querySelector(".caja").innerHTML+=`<div>${valor}</div>`;
}