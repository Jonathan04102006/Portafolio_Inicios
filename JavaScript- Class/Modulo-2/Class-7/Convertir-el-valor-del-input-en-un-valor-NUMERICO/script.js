let nombre;

document.querySelector(".boton").addEventListener("click",leer);

function leer(){
    nombre=document.querySelector("#campo").value;
    (nombre)
    document.querySelector(".caja").innerHTML=nombre;
}