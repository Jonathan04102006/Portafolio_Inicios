/**Mostrar al cliente el menu de forma opcional
 * 1- Al cargar el sistema lo primero que se va a mostrar al cliente, es una bienvenida y el nombre del restaurante.
 * 2- Junto al saludo mostrar las opciones del menu disponibles.
 * 3- Lo primero el cliente va a seleccionar es el plato fuerte.
 * 4- Lo siguiente a seleccionar sera la bebida.
 * 5- Lo ultimo en seleccionar sera el postre.
 * 6- Al finalizar la eleccion del menu, mostraremos un mensaje dando las gracias al cliente y reiniciar el menu.
 */

//APUNTES----------------
// HTML Y CSS
/**
 * 1- FUNCION de bienvenida y mostrar (nombre del restaurante) junto mostrando las opciones del menu (plato fuerte, bebida y postre)
 * 2- Crear los Array de (plato fuerte, bebida y postre).
 * 3- FUNCION de seleccion de plato fuerte.
 * 4- FUNCION de seleccion de bebida.
 * 5- FUNCION de seleccion de postre.
 * 6- FUCION con un mensaje de (gracias) y llamar la FUNCION de bienvenida y mostrar (MOSTRAR NUMERO DE CLIENTE).
 */

/*1-¿Cual es el nombre y logo del restaurante?
2- ¿Nombres de los productos y precios?
3- ¿Como se dara la Bienvenida y gracias al CLIENTE?
4- ¿Paletas de colores que desea?
5- ¿Como se identificara el pedido por nombre o numero del cliente?
*/
let contadorCliente = 0;

function saludo() {
    const contenedor = document.getElementById("contenedorTitulo");
    let titulo =`
    <p>--------------------------------------------------------------</p>
    <h2>¡BIENVENIDO AL RESTAURANTE "ANTOJITOS"!</h2>
    <p>--------------------------------------------------------------</p>
    `;

    let contenidoHTML = `
    <div>
        ${titulo}
    </div>
    `;
    
    contenedor.innerHTML = contenidoHTML;
}

function mostrarContenido() {
    contadorCliente++;
    const contenedor = document.getElementById("contenedorListaMenu");

    let contenidoHTML = `
    <div>
        ${obtenerPlatos()}
        ${obtenerBebidas()}
        ${obtenerPostres()}
        
        <p>--------------------------------------------------------------</p>
        <p><strong>Cliente No:</strong> ${contadorCliente}</p>
        <p>--------------------------------------------------------------</p>
    </div>
    `;
    
    contenedor.innerHTML = contenidoHTML;
}

// 

// SE QUEDA EN INDEX.JS
/* function mensajeDeGracias(){

} */

/* Para la version 2.0:
 1- Plato fuerte, bebida y postre (OPCIONAL MENU)
 2- Ubicacion en la que se ubica el Restaurante.
 3- QR ----
 4- Imagen o foto de la comida
 5- Resdes sociales
 6- Precios de los productos
*/