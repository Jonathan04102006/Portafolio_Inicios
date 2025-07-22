let nombre;
document.querySelector("#campo").addEventListener("keydown",teclado)
document.querySelector(".select").addEventListener("click",leer);
document.querySelector(".select").innerHTML+=`<option>JavaScript</option>`
limpiar();

function teclado(e){
    (e.key==="Enter") && leer()
}

function leer(){
    nombre=document.querySelector("select").value.trim();
    (nombre)
    document.querySelector(".caja").innerHTML=nombre;
    limpiar()
}

function limpiar(){
    const ELEMENTO=document.querySelector("#campo");
    ELEMENTO.value="";
    ELEMENTO.focus();
}