let nombre;
document.querySelector("#campo").addEventListener("keydown",teclado)
document.querySelector(".boton").addEventListener("click",leer);

limpiar()

function teclado(e){
    (e.key==="Enter") && leer()
}

function leer(){
    nombre=document.querySelector("#campo").value.trim();
    (nombre)
    document.querySelector(".caja").innerHTML=nombre;
    limpiar()
}

function limpiar(){
    const ELEMENTO=document.querySelector("#campo");
    ELEMENTO.value="";
    ELEMENTO.focus();
}