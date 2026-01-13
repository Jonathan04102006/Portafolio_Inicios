/*
Una funcion es un bloque de codigo, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una funcion puede aceptar parametros y devolver un valor.

Las funciones en JavaScript son objetos, un tipo especial de objetos:

Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como valor de retorno.
*/

// Funcion Declarada

function estoEsUnaFuncion(){
    console.log("Uno");
    console.log("De");
    console.log("Tres");
}

// Invocacion de funcion
/*estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();*/

function unaFuncionQueDevuelveValor(){
    console.log("Uno");
    return 19;
    console.log("De");
    console.log("Tres");
    return "La funcion ha retornado una Cadena de texto";
}

let valorDeFuncion = unaFuncionQueDevuelveValor();

console.log(valorDeFuncion);