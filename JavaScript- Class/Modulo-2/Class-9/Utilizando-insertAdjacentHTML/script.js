const CAJA=document.querySelector(".caja");
for(let k=0;k<10;k++){
    CAJA.insertAdjacentHTMLL("beforeend",`<button>Boton ${k+1}</button>`);
    document.querySelectorAll("button")[k].addEventListener("click",saludar);
}

function saludar(){
    alert("Hola, ¿que tal?");
}