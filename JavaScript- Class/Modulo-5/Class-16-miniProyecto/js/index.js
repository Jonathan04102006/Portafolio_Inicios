leer();
document.querySelector(".compra").addEventListener("click", guardar);

function guardar(){
    const escrito=document.querySelector("#producto").Value.trim();
    if (escrito){
            const dato={
                aGuardar:escrito
            }
            fetch("php/insertar.php",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(dato)
            })
            .then(u => u.text())
            .then(o => console.log(o));
    }
}

function leer(){
    fetch("php/leer.php")
    .then(datos => datos.json())
    .then(resultado => {
        console.log(resultado)
    });
}