/* 1️⃣ Parámetro Opcional

Crea una función llamada crearUsuario que reciba un nombre obligatorio y un correo opcional.

Si el correo es proporcionado, debe retornar:
"Usuario: nombre - Correo: correo"

Si no se proporciona, debe retornar:
"Usuario: nombre - Sin correo registrado" */
console.log("*********************ejercicio 1 de Opcionales, M\u00FAltiples y por Defecto en TypeScript*********************");
function crearUsuario(nombre, correo) {
    if (correo) {
        return "Usuario: ".concat(nombre, ", correo: ").concat(correo);
    }
    else {
        return "Usuario: ".concat(nombre, ", sin correo registrado");
    }
}
console.log(crearUsuario("Jonathan"));
console.log(crearUsuario("Jonathan", "jonaperez0406@gmail.com"));
/* 2️⃣ Parámetros Múltiples (REST)

Crea una función llamada calcularPromedio que reciba una cantidad indefinida de números usando parámetros REST.

Debe retornar el promedio de todos los números recibidos.

Si no se envían números, debe retornar 0. */
console.log("*********************ejercicio 1 de Opcionales, M\u00FAltiples y por Defecto en TypeScript*********************");
function calcularPromedio() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    if (numeros.length === 0) {
        return 0;
    }
    var suma = numeros.reduce(function (acumulado, numero) { return acumulado + numero; }, 0);
    return suma / numeros.length;
}
console.log(calcularPromedio(9, 7, 4, 8));
console.log(calcularPromedio(10, 7, 9, 8));
/* 3️⃣ Parámetros con Valor por Defecto

Crea una función llamada generarSaludo que reciba un nombre y un idioma con valor por defecto "es".

Si el idioma es "es", debe retornar "Hola, nombre".

Si el idioma es "en", debe retornar "Hello, nombre".

Si es cualquier otro idioma, debe retornar "Saludos, nombre". */
console.log("*********************ejercicio 1 de Opcionales, M\u00FAltiples y por Defecto en TypeScript*********************");
