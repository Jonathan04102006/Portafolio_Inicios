// Length

const texto = 'Hola Mundo';
console.log(texto.length);

// Slice(inicio, fin)

const texto1 = "JavaScript es Genial";
console.log(texto1.slice(0, 10));
console.log(texto1.slice(11));
console.log(texto1.slice(-6));

// Substring(inicio, fin)
const texto2 = "Hola Mundo";
console.log(texto2.substring(0, 4));

// Split(separador)
const texto3 = 'Linea1, Linea2, Linea3';
const lineas = texto3.split(' ');
console.log(lineas);

// trim (), trimStart(), trimEnd()
const texto4 = '    Hola Mundo  ';
console.log(texto4.trim()); // "Hola Mundo"
console.log(texto4.trimStart()); // "Hola Mundo "
console.log(texto4.trimEnd()); // " Hola Mundo"

// toLowerCase() - toUpperCase()

const texto5 = 'JavaScript';
console.log(texto5.toLocaleLowerCase()); // "javascript"
console.log(texto5.toLocaleUpperCase()); // "JAVASCRIPT"

// includes(sucadena)

const contenido = 'Aprende JavaScript desde cero';
console.log(contenido.includes('JavaScript')); // true
console.log(contenido.includes('Python')); // false

// startWith() - endsWith()

const archivo = 'documeno.md';
console.log(archivo.startsWith('doc'));
console.log(archivo.endsWith('.md'));

// `replace()` y `replaceAll()`

const texto6 = 'Hola Mundo, Hola JavaScript';
console.log(texto6.replace('Hola', 'Hi')); // "Hi Mundo, Hola JavaScript"
console.log(texto6.replaceAll('Hola', 'Hi')); // "Hi Mundo, hi JavaScript"
console.log(texto6);