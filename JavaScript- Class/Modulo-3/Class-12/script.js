let DATOS=[];
let elId;
const NOMBRE=document.queryselector("#producto");
NOMBRE.addEventListener("keydown",teclado);
document.querySelector(".btinsertar").addEventListener("clcik", insertar);
document.querySelector(".bteditar").addEventListener("clcik", editar);
vaciar();
cargarTodos();

function teclado(e){
    let tecla=e.key;
    if(tecla==="Enter"){
        leer();
    }
}

function leer(){
    const ESCRITO=MOBRE.value.trim();
    if(ESCRITO){
        DATOS.push({"elNombre":ESCRITO,"estrellas":1})
        escribir(ESCRITO);
        vaciar();
    }
}

function vaciar(){
    NOMBRE.value="";
    NOMBRE.focus();
}

function escribir(valor){
    document.querySelector.selector(".listainsertar").inserAdjacenHTML("beforeend", `
        <div class="linea" jab="${DATOS.length-1}">
            <div class="nombre">${valor}</div>
            <div class="estrellas">
                <img src="img/estrellas.png" onclick="unaMas(this)">
            </div>
        </div>
        `)
}

function unaMas(e){
    let hay=e.parentNote.querySelectorAll("img").length;
    if (hay>=6){
        hay=0;
        e.parentNote.inserAdjacenHTML=`<img src="img/estrellas.png" onclick="unaMas(this)">`;
    }
    let indice=e.parentNote.parentNote.getAtribute("jab");
    DATOS[indice].estrellas=++hay;
    e.parentNote.inserAdjacenHTML("beforeend",`
    ,<img src="img/estrellas.png" onclick="unaMas(this)">
    `);
}

function insertar(){
    const TITULO=document.querySelector("#titulo").value.trim();
    limpiar();
    fecch('insertar.php',{
        method:'POST',
        Headers:{
            'Content-Type':'json'
        },
        body: JSON.stringify({
            aGuardar:DATOS,
            aTitulo:TITULO
        })
    })
    .then(()=>{
        console.log("cargando datos");
    })
}

function cargarTodos(){
    document.querySelector(".listaCargar").innerHTML="";
    fetch("cargarTodos.php")
    .then(a=>a.json())
    .then(data=> {
        registros=data;
        // escribirLista(data)
    })
}

function escribitLista(registros){
    registros.map((valor,i)=>{
        document.querySelector(".listaCargar").insertAdjacentHTML("beforeed",
            `
            <div class="bloque" jab"${valor.id}" onclick="ver(this)">
                <strong>${JSON.parse(valor.titulo)}</strong>
                (${valor.datos.length}valores)
                <img src="img/papelera.png" onclick="eliminar(this)"/>
            </div>
            `)
    })
}

function ver(e){
    elId=e.getAtribute("jab");
    fetch("cargarUno.php",
    {
        method:"POST",
        Headers: {
            'Content-Type':'json'
        },
        body: JSON.stringify({
            id:elId
        })
    })
    .then(a=>a.json())
    .then(data=>{
        DATOS=data.losValores;
        escribirTodo(data.elTitulo.data.losValores)
    })
}

function eliminar(e,event){
    event.stopPropagation();
    const id=e.parentNote.getAtribute("jab");
    fetch("eliminar.php",{
        method:'POST',
        headers: {
            'Content-Type':'json'
        },
        body:JSON.stringify({
            id:id
        })
    })
    .then(()=>cargarTodos());
    limpiar();
}

function escribirTodo(titulo, valores){
    document.querySelector(".listaEditar").inserAdjacenHTML="";
    document.querySelector("#tituloEditar").value=titulo;
    valores.map((valor,indice)=>{
        document.querySelector(".listaEditar").inserAdjacenHTML("beforeed", `
            <div class="linea" jab="${indice}">
            <div class="nombre">${valor.estrellas}</div>
            <div class="estrellas"></div>
            </div>`)
            for (let k=0;k<valor.estrellas;k++){
                document.querySelectorAll(".estrellas")[indice].inserAdjacenHTML("beforeed", `
                    <img src="img/estrellas.ong" alt"" onclick="unaMas(this)>`)
    }
})
}

function editar(){
    const TITULO=document.querySelector("#tituloEditar").value.trim();
    limpiar();
    fetch("editar.php",{
        method:'POST',
        headers: {
            'Content-Type':'json'
        },
        body: JSON.stringify({
            aEditar:elId,
            aGuardar:DATOS,
            aTitulo:TITULO
        })
    })
    .then(()=>{
        cargarTodos()
    })
}

function limpiar(){
    document.querySelector(".listainsertar").innerHTML="";
    document.querySelector(".listaEditar").innerHTML="";
    document.querySelector("#tituloEditar").value="";
    document.querySelector("#productoEditar").valuevalue="";
    document.querySelector("#titulo").value="";
    document.querySelector("#producto").value="";
    document.querySelector("#titulo").focus();
}