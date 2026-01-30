/* Validación de número
Crea un try-catch donde se intente convertir una variable a número.
Si el valor no es un número, lanza un error personalizado indicando que el dato ingresado es inválido. */
console.log(`************************ejercicio 1 de Manejo de Errores************************`);
try{
    let numero = "l";

    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un Numero");
    }

    console.log(numero * numero)
}catch(error){
    console.log(`el dato que ingresado produjo: ${error}`);
}

/* Acceso a propiedad inexistente
Dentro de un try, intenta acceder a una propiedad que no existe en un objeto.
Captura el error en el catch y muestra un mensaje indicando que ocurrió un error al acceder al objeto. */
console.log(`************************ejercicio 2 de Manejo de Errores************************`);
try{
    console.log(`Se evaluar eel try-1`);
    dia;
    console.log(`Se evalua el try-2`);
}catch(error){
    console.log(`Error producido en: ${error}`);
}

/* División controlada
Usa un try-catch-finally para realizar una división entre dos números.
Si el divisor es 0, lanza un error.
En el finally, muestra un mensaje indicando que la operación ha finalizado. */
console.log(`************************ejercicio 3 de Manejo de Errores************************`);