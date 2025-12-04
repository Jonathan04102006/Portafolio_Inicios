// Creare una interfaz para leer desde la consola
const readline = require('readline');
// const { console } = require('inspector');

const rl = readline.createInterface({
    input: Process.stdin,
    output: Process.stdout
});

console.log(
    `
    ==========================BIENVENIDO AL RESTAURANTE BUEN SABOR==========================
    
                                ==============================
                                ||           MENÚ           ||                               
                                ||                          ||
                                ||PIZZA HAMBURGUESA ENSALADA||
                                ||                          ||
                                ||    AGUA REFRESCO CAFE    ||
                                ==============================
`);

// Progrma de toma de pedidos para un restaurante
// Platillos: Pizza, Hamburguesa y Ensalda
// Bebidas: Agua, Refresco y Café