/*
Una funcion es un bloque de codigo, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una funcion puede aceptar parametros y devolver un valor.

Las funciones en JavaScript son objetos, un tipo especial de objetos:

Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como valor de retorno.
*/

// Declaracion de funcion
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

// let valorDeFuncion = unaFuncionQueDevuelveValor();

// console.log(valorDeFuncion);

function saludar(nombre = "Desconocido", edad = 0){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

// saludar("Ariel", 19);
// saludar();

// Funciones declaradas VS funciones expresadas

funcionDeclarada();

function funcionDeclarada(){
    console.log(`Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada`);
}

funcionDeclarada();

// funcionExpresada();

// Funcion anonima
const funcionExpresada = function(){
    console.log(`Esto es una funcion expresada, es decir, una funcion que sea ha asignado como valor a una vaariable, si invocamos esta funcion antes de su definicion JS nos dira 'Cannot access 'funcionExpresada' before initialization'`)
}

funcionExpresada();