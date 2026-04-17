/* Recorre un arreglo de números del 1 al 10 y utiliza break para detener el ciclo cuando el número sea mayor a 6. Muestra en consola solo los números que sí se recorrieron. */
console.log(`****************ejercicio 1 de break y continue****************`);
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for ( let i = 0; i < numeros.length; i++){
    if (i === 6){
        break;
    }
    console.log(numeros[i]);
}

/* Recorre un arreglo de números del 1 al 10 y utiliza continue para saltar los números pares. Muestra en consola únicamente los números impares. */
console.log(`****************ejercicio 2 de break y continue****************`);

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        continue;
    }
    console.log(numeros[i]);
}

/* Recorre un arreglo de nombres y utiliza break para detener el ciclo cuando encuentres un nombre específico (por ejemplo "Admin"). Muestra en consola los nombres anteriores a ese valor. */
console.log(`****************ejercicio 3 de break y continue****************`);
const nombres = ["Ariel", "Roger", "Kimberly", "Anderson", "Jhony", "Saori", "Zoro", "Nami"];

for (let i = 0; i < nombres.length; i++){
    if ( nombres[i] === "Saori"){
        break;
    }
    console.log(nombres[i]);
}