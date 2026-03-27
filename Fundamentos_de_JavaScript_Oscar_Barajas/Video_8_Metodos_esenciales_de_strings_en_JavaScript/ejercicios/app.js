/* 🧩 Ejercicio 1: Analizar y modificar un texto
4
📌 Enunciado:

Tienes el siguiente texto:

const texto = "   Bienvenido a JavaScript Moderno   ";
🎯 Debes hacer:
Eliminar los espacios al inicio y al final.
Mostrar la longitud del texto limpio.
Extraer la palabra "JavaScript" usando slice().
Convertir todo el texto a mayúsculas.
🧠 Pistas:
Usa .trim()
Usa .length
Usa .slice()
Usa .toUpperCase() */
console.log("****************************************************************");
const texto = "   Bienvenido a JavaScript Moderno   ";
console.log(texto.trim());
console.log(texto.length);
console.log(texto.slice());
console.log(texto.toUpperCase());

/* 🧩 Ejercicio 2: Convertir texto en lista
4
📌 Enunciado:

Tienes el siguiente string:

const datos = "manzana,pera,uva,mango";
🎯 Debes hacer:
Convertir el string en un arreglo usando split().
Mostrar cuántos elementos tiene el arreglo.
Verificar si el arreglo contiene la palabra "uva" usando includes().
Mostrar el primer y último elemento del arreglo.
🧠 Pistas:
Usa .split(",")
Usa .length
Usa .includes()
Accede con [0] y [array.length - 1] */
console.log("****************************************************************");
const datos = "manzana,pera,uva,mango";
console.log(datos.split(","));
console.log(datos.length);
console.log(datos.includes("uva"));
console.log("Primer elemento:", datos[0]);
console.log("Último elemento:", datos[datos.length - 1]);

/* 🧩 Ejercicio 3: Validar y modificar texto
4
📌 Enunciado:

Tienes el siguiente texto:

const archivo = "reporte_final.TXT";
🎯 Debes hacer:
Convertir el texto a minúsculas.
Verificar si el archivo termina en .txt.
Reemplazar "reporte" por "informe".
Verificar si el texto incluye la palabra "final".
🧠 Pistas:
Usa .toLowerCase()
Usa .endsWith()
Usa .replace()
Usa .includes() */
console.log("****************************************************************");
const archivo = "reporte_final.TXT";
console.log(archivo.toLocaleLowerCase());
console.log(archivo.endsWith());
console.log(archivo.replace());
console.log(archivo.includes());