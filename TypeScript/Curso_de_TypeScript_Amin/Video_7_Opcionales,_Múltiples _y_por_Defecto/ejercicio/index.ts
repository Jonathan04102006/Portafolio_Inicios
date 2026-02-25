/* 1️⃣ Parámetro Opcional

Crea una función llamada crearUsuario que reciba un nombre obligatorio y un correo opcional.

Si el correo es proporcionado, debe retornar:
"Usuario: nombre - Correo: correo"

Si no se proporciona, debe retornar:
"Usuario: nombre - Sin correo registrado" */
console.log(`*********************ejercicio 1 de Opcionales, Múltiples y por Defecto en TypeScript*********************`);
function crearUsuario(nombre: string, correo?: string): string{
    if(correo){
        return `Usuario: ${nombre}, correo: ${correo}`;
    }else{
        return `Usuario: ${nombre}, sin correo registrado`;
    }
}

console.log(crearUsuario("Jonathan"));
console.log(crearUsuario("Jonathan", "jonaperez0406@gmail.com"));

/* 2️⃣ Parámetros Múltiples (REST)

Crea una función llamada calcularPromedio que reciba una cantidad indefinida de números usando parámetros REST.

Debe retornar el promedio de todos los números recibidos.

Si no se envían números, debe retornar 0. */
console.log(`*********************ejercicio 1 de Opcionales, Múltiples y por Defecto en TypeScript*********************`);
function calcularPromedio(...numeros: number[]): number{
    if (numeros.length === 0){
        return 0;
    }
    const suma = numeros.reduce((acumulado, numero) => acumulado + numero, 0);
    return suma / numeros.length;
}

console.log(calcularPromedio(9, 7, 4, 8));
console.log(calcularPromedio(10, 7, 9, 8));
    

/* 3️⃣ Parámetros con Valor por Defecto

Crea una función llamada generarSaludo que reciba un nombre y un idioma con valor por defecto "es".

Si el idioma es "es", debe retornar "Hola, nombre".

Si el idioma es "en", debe retornar "Hello, nombre".

Si es cualquier otro idioma, debe retornar "Saludos, nombre". */
console.log(`*********************ejercicio 1 de Opcionales, Múltiples y por Defecto en TypeScript*********************`);
function generarSaludo(nombre: string, idioma: string = "es"):string{
    if(idioma === "es") {
        return `Hola, ${nombre}`;
    }else if(idioma === "en") {
        return `Hello, ${nombre}`;
    }else{
        return `Saludos, ${nombre}`;
    }
}

console.log(generarSaludo("Ariel"));
console.log(generarSaludo("Jonathan", "en"));
console.log(generarSaludo("Carlos", "fr"));
