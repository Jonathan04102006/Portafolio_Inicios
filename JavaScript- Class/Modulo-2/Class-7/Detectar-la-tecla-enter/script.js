let nombre;
document.querySelector("#campo").addEventListener("keydown",teclado)
document.querySelector(".boton").addEventListener("click",leer);

function teclado(e){
    (e.key==="Enter") && leer()
}

function leer(){
    nombre=document.querySelector("#campo").value;
    (nombre)
    document.querySelector(".caja").innerHTML=nombre;
}