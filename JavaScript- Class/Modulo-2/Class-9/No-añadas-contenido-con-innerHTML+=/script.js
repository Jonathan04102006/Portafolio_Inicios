const CAJA=document.querySelector(".caja");
for(let k=0;k<10;k++){
    CAJA.innerHTML=`<button>Cancelar</button>`;
    document.querySelectorAll("button")[k].addEventListener("click",saludar);
}

function saludar(){
    alert("Hola, ¿que tal?");
}