let DATOS = [];
let elId;

const NOMBRE = document.querySelector('#producto');
const TITULO = document.querySelector('#titulo');
const BTN_INSERTAR = document.querySelector('.btinsertar');
const LISTA_INSERTAR = document.querySelector('.listainsertar');
const LISTA_CARGAR = document.querySelector('.listaCargar');

document.querySelector(".btinsertar").addEventListener("click", insertar);
document.querySelector(".bteditar").addEventListener("click", editar);

NOMBRE.addEventListener("keydown", detectarEnter);
BTN_INSERTAR.addEventListener("click", insertar);


vaciar();
cargarTodos();

function detectarEnter(e) {
    if (e.key === "Enter") {
        leer();
    }
}

function leer() {
    const ESCRITO = NOMBRE.value.trim();
    //Evitar que se mezcle los datos al editar y al insertar
    if (ESCRITO !== "") {
        if(DATOS.length>0 && document.querySelector(".listainsertar").innerHTML===""){
            DATOS=[];
        }
        DATOS.push({ "elNombre": ESCRITO, estrellas: 1 });
        agregarElementoALista(ESCRITO);
        vaciar();
    }
}

function vaciar() {
    NOMBRE.value = "";
    NOMBRE.focus();
}

function agregarElementoALista(valor) {
    LISTA_INSERTAR.insertAdjacentHTML("beforeend", `
        <div class="linea" jab="${DATOS.length-1}">
            <div class="nombre">${valor}</div>
            <div class="estrellas">
                <img src="img/estrella.png" onclick="unaMas(this)">
            </div>
        </div>
    `);
}

function unaMas(e) {
    const estrellasContenedor = e.parentNode;
    let cantidad = estrellasContenedor.querySelectorAll("img").length;

    if (cantidad >= 6) {
        cantidad = 1;
        estrellasContenedor.innerHTML = `<img src="img/estrella.png" onclick="unaMas(this)">`;
    } else {
        cantidad++;
        estrellasContenedor.insertAdjacentHTML("beforeend", `
            <img src="img/estrella.png" onclick="unaMas(this)">
        `);
    }

    const indice = estrellasContenedor.parentNode.getAttribute("jab");
    DATOS[indice].estrellas = cantidad;
}

function insertar() {
    const tituloTexto = TITULO.value.trim();
    limpiar();
    debugger;
    if (tituloTexto === "" || DATOS.length === 0) {
        alert("Debes escribir un título y al menos un producto.");
        return;
    }

    fetch('php/insertar.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            aGuardar: DATOS,
            aTitulo: tituloTexto
        })
    })
    .then(res => res.text())
    .then(respuesta => {
        console.log("Respuesta del servidor:", respuesta);
        // Opcional: limpiar o recargar después de insertar
        DATOS = [];
        LISTA_INSERTAR.innerHTML = "";
        TITULO.value = "";
        cargarTodos();
    })
    .catch(error => {
        console.error("Error al insertar:", error);
    });
}

function cargarTodos() {
    document.querySelector(".listaCargar").innerHTML="";
    fetch("php/cargarTodos.php")
    .then(res => res.json())
    .then(data => {
        LISTA_CARGAR.innerHTML = "";
        escribirLista(data);
    })
    .catch(error => {
        console.error("Error al cargar datos:", error);
    });
}

function escribirLista(registros) {
    registros.forEach((valor, i) => {
        LISTA_CARGAR.insertAdjacentHTML("beforeend", `
            <div class="bloque" jab="${valor.id}" onclick="ver(this)">
                <strong>${valor.titulo}</strong>
                <div>(${valor.datos.length} valores)</div>
                <img src="img/papelera.png" onclick="eliminar(this,event)"/>
            </div>
        `);
    });
}
function ver(e){
    elId=e.getAttribute("jab");
    fetch("php/cargarUno.php",
    {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            id:elId
        })
    })
    .then(res=>res.json())
    .then(data=>{
        DATOS=data.losValores;
        escribirTodo(data.elTitulo,data.losValores)
    })
}
function eliminar(e,event){
    event.stopPropagation();
    const id=e.parentNode.getAttribute("jab");
    fetch("php/eliminar.php",{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:id
        })
    })
    .then(()=>cargarTodos());
    limpiar();
}
function escribirTodo(titulo, valores) {
    document.querySelector(".listaEditar").innerHTML = "";
    document.querySelector("#tituloEditar").value = titulo;
    valores.map((valor, indice) => {
        document.querySelector(".listaEditar").insertAdjacentHTML("beforeend", `
            <div class="linea" jab="${indice}">
                <div class="nombre">${valor.elNombre}</div>
                <div class="estrellas"></div>
            </div>`);

        for (let k = 0; k < valor.estrellas; k++) {
            document.querySelectorAll(".estrellas")[indice].insertAdjacentHTML("beforeend", `
                <img src="img/estrella.png" alt="" onclick="unaMas(this)"/>`);
        }
    });
}
function editar(){
    const TITULO=document.querySelector("#tituloEditar").value.trim();
    limpiar();
    fetch("php/editar.php",{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            aEditar:elId,
            aGuardar:DATOS,
            aTitulo:TITULO
        })
    })
    .then(()=>{
        cargarTodos();
    })
}
function limpiar(){
    document.querySelector(".listainsertar").innerHTML="";
    document.querySelector(".listaEditar").innerHTML="";
    document.querySelector("#tituloEditar").value="";
    document.querySelector("#productoEditar").value="";
    document.querySelector("#titulo").value="";
    document.querySelector("#producto").value="";
    document.querySelector("#titulo").focus();
}