/* 🧩 Ejercicio 1: Agregar nuevas funciones al módulo
🎯 Objetivo:

Extender el módulo index.ts agregando nuevas funcionalidades matemáticas.

📌 Instrucciones:

En tu archivo index.ts, agrega las siguientes funciones:

potencia(base: number, exponente: number): number

modulo(numero1: number, numero2: number): number

Exporta ambas funciones correctamente.

En main.ts, impórtalas y muestra resultados en consola.

💡 Ejemplo esperado:
// index.ts
export function potencia(base: number, exponente: number): number {
    return base ** exponente;
}

export function modulo(numero1: number, numero2: number): number {
    return numero1 % numero2;
}
// main.ts
import { potencia, modulo } from "./index";

console.log(potencia(2, 3)); // 8
console.log(modulo(10, 3));  // 1 */
export function potencia(base: number, exponente: number): number {
    return base ** exponente;
}

export function modulo(numero1: number, numero2: number): number {
    return numero1 % numero2;
}

/* 🧩 Ejercicio 2: Separar módulos por responsabilidad
🎯 Objetivo:

Organizar el código en múltiples módulos para hacerlo más limpio.

📌 Instrucciones:

Crea un nuevo archivo llamado operacionesAvanzadas.ts.

Mueve las funciones:

multiplicacion

division

Exporta esas funciones desde ese nuevo archivo.

En main.ts, importa funciones desde ambos módulos:

index.ts

operacionesAvanzadas.ts

💡 Ejemplo esperado:
// operacionesAvanzadas.ts
export function multiplicacion(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

export function division(numero1: number, numero2: number): number {
    return numero1 / numero2;
}
// main.ts
import { suma, resta } from "./index";
import { multiplicacion, division } from "./operacionesAvanzadas";

console.log(suma(10, 5));
console.log(multiplicacion(4, 3)); */
export function suma ( numero1: number, numero2: number ): number {
    return numero1 + numero2;
}

export function resta ( numero1: number, numero2: number ): number {
    return numero1 - numero2;
}

export function multiplicacion( numero1: number, numero2: number ): number {
    return numero1 * numero2;
}

export function division ( numero1: number, numero2: number ): number {
    return numero1 / numero2;
}
/* 🧩 Ejercicio 3: Usar exportación por defecto (default export)
🎯 Objetivo:

Aprender a usar export default en módulos.

📌 Instrucciones:

Crea un archivo llamado constantes.ts.

Declara:

Pi

E (número de Euler, por ejemplo: 2.718)

Exporta un objeto por defecto que contenga ambas constantes.

En main.ts, importa ese objeto y úsalo.

💡 Ejemplo esperado:
// constantes.ts
const constantes = {
    Pi: 3.1416,
    E: 2.718
};

export default constantes;
// main.ts
import constantes from "./constantes";

console.log(constantes.Pi);
console.log(constantes.E);
🚀 Resultado de aprendizaje

Con estos ejercicios aprenderás a:

Usar export e import

Organizar código en múltiples archivos

Aplicar export default

Mejorar la modularidad y mantenibilidad de tu proyecto */

export const Pi = 3.1416;
export const E = 2.718;