/* 🧠 Ejercicio 1: Clasificador de notas

Objetivo:
Practicar cómo usar switch con números para clasificar una nota.

Instrucciones:

Crea una variable llamada nota.
Usa switch para evaluar la nota.
Muestra un mensaje según el valor:
10 → "Excelente"
8 o 9 → "Muy bien"
6 o 7 → "Aprobado"
0 a 5 → "Reprobado"
Usa default para valores inválidos.

Ejemplo esperado:

const nota = 9;

// Tu código aquí */
console.log("****************************************************************");

const nota = 10;

switch (nota) {
    case 10:
        console.log(`Excelente`);
        break
    case 9:
    case 8:
        console.log(`Muy bien`);
        break
    case 7:
    case 6:
        console.log(`Aprobado`);
        break
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log(`Reprobado`);
        break
    default:
        console.log(`valores inválidos`);
}

/* 🧠 Ejercicio 2: Menú de opciones

Objetivo:
Usar switch para simular un menú interactivo.

Instrucciones:

Crea una variable opcion con un número del 1 al 4.
Usa switch para mostrar:
1 → "Ver perfil"
2 → "Editar perfil"
3 → "Configuración"
4 → "Cerrar sesión"
Si no es válido → "Opción no válida"

Ejemplo esperado:

const opcion = 2;

// Tu código aquí */
console.log("****************************************************************");

const opcion = 1;

switch (opcion) {
    case 1:
        console.log(`Ver perfil`);
        break
    case 2:
        console.log(`Editarl perfil`);
        break
    case 3:
        console.log(`Cofiguración`);
        break
    case 4:
        console.log(`Cerrar sesión`);
        break
    default:
        console.log(`Opción no válida`);
}

/* 🧠 Ejercicio 3: Conversor de día (número a texto)

Objetivo:
Entender cuándo usar switch en múltiples casos simples.

Instrucciones:

Crea una variable numeroDia (1 al 7).
Usa switch para convertir:
1 → "Lunes"
2 → "Martes"
3 → "Miércoles"
4 → "Jueves"
5 → "Viernes"
6 → "Sábado"
7 → "Domingo"
Si no es válido → "Número incorrecto"

Ejemplo esperado:

const numeroDia = 3;

// Tu código aquí */
console.log("****************************************************************");

const numeroDia = 5;

switch (numeroDia) {
    case 1:
        console.log(`Lunes`);
        break
    case 2:
        console.log(`Martes`);
        break
    case 3:
        console.log(`Miercoles`);
        break
    case 4:
        console.log(`Jueves`);
        break
    case 5:
        console.log(`Viernes`);
        break
    case 6:
        console.log(`Sábado`);
        break
    case 7:
        console.log(`Domingo`);
        break
    default:
        console.log(`Número incorrecto`);

}