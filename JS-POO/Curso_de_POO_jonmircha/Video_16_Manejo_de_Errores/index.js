console.log(`****PRIMER TRY****`);
try{
    console.log("En el Try se agrega el codigo a evaluar");
    noExiste;
    console.log("Segundo mensaje en el try");
}catch(error){
    console.log("Catch, captura cualquier error surgido o lanzado en el try");
    console.log(error);
}finally{
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
}


console.log(`****SEGUNDO TRY****`);
try{
    let numero = "y";

    if( isNaN(numero)){
        throw new Error("El caracter introducido no es un Numero");
    }

    console.log(numero * numero);
}catch(error){
    console.log(`Se produjo el siguiente error: ${error}`);
}