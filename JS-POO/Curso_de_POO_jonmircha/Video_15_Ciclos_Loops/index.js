let contador = 0;

// while( contador < 10){
//     console.log("while " + contador);
//     contador++;
// }
// 
// do{
//     console.log("do while " + contador);
//     contador++;
// }while(contador < 10);
// 
// 

// for (inicializacion de variable; condicion;
//     decremento o incremento){
//         sentencias que ejecuta el for
//         sentencias que ejecuta el for
//         sentencias que ejecuta el for
//         sentencias que ejecuta el for
// }

for(let i = 0; i < 10; i++){
    console.log("for " + i)
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

const jon = {
    nombre: "Jonathan",
    apellido: "Perez",
    edad: 19
}

// For in
for(const propiedad in jon){
    console.log(`key: ${propiedad}, Value: ${jon[propiedad]}`);
}

// For of
for(const elemento of numeros){
    console.log(elemento);
}

let cadena = "Hola mundo";

for(const caracter of cadena){
    console.log(caracter);
}