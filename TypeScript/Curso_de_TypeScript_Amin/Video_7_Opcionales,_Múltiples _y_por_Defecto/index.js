function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre);
    }
    else {
        return "Hola, ".concat(nombre);
    }
}
console.log(saludar("Jona"));
console.log(saludar("Jona", "Buenas tardes"));
// Parametros multiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
}
console.log("Resultado de sumar Todo: ", sumarTodos(1, 2, 3, 4, 5, 6));
// Valores por defecto
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adios"; }
    return "".concat(nombre, ", ").concat(despedida);
}
console.log(despedir("Ariel"));
console.log(despedir("Ariel", "Hasta luego"));
