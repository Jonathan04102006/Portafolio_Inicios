/* 1️⃣ Ejercicio – Arreglos

Crea un arreglo de tipo string llamado colores con al menos 4 colores.

Luego:

Muestra todos los colores en consola.

Agrega un nuevo color al arreglo.

Elimina el último color.

Recorre el arreglo con un for e imprime cada color individualmente. */
console.log(`*************************ejercicio 1 de Arreglos, Tuplas y Enumeradores*************************`);
const colores: string[] = ["amarillo", "celeste", "verde", "negro"];
console.log(`Colores: ${colores}`);

colores.push("blanco");

console.log(`Colores: ${colores}`);

colores.pop();

for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}

/* 2️⃣ Ejercicio – Tuplas

Crea una tupla llamada producto que contenga:

Nombre del producto (string)

Precio (number)

Disponible (boolean)

Luego:

Muestra los valores en consola usando interpolación.

Modifica el precio.

Crea un arreglo que contenga al menos 2 productos usando esa misma tupla. */
console.log(`*************************ejercicio 2 de Arreglos, Tuplas y Enumeradores*************************`);
let producto: [string, number, boolean] = ["Resident Evil 4 REMAKE", 39.99, false];
console.log(`Producto: ${producto[0]}, Precio: $${producto[1]}, Disponible: ${producto[2]}`);

producto[1] = 49.99;
producto[2] = true;

console.log(`Precio actualizado: $${producto[1]} Disponible: ${producto[2]}`);

let producto2: [string, number, boolean] = ["Mouse Inalámbrico", 25.99, false];

let unionDeProductos: [string, number, boolean][] = [producto, producto2];

unionDeProductos.forEach(producto => {
  console.log(`Producto: ${producto[0]}, Precio: $${producto[1]}, Disponible: ${producto[2]}`);
});   

/* 3️⃣ Ejercicio – Enumeradores (Enums)

Crea un enum llamado DiasSemana con los días de la semana.

Luego:

Crea una variable que almacene un día usando el enum.

Muestra en consola el valor del día seleccionado.

Crea una función que reciba un valor del enum y muestre un mensaje diferente dependiendo del día. */
console.log(`*************************ejercicio 3 de Arreglos, Tuplas y Enumeradores*************************`);
enum DiasSemana {
  LUNES = "Lunes",
  MARTES = "Martes",
  MIERCOLES = "Miercoles",
  JUEVES = "Jueves",
  VIERNES = "Viernes",
  SABADO = "Sábado",
  DOMINGO = "Domingo"
}

const diaSeleccionado: DiasSemana = DiasSemana.VIERNES;

console.log(`Día seleccionado: ${diaSeleccionado}`);

function mensajePorDia(dia: DiasSemana): void{
  switch (dia) {
    case DiasSemana.LUNES:
      console.log(`Es lunes, animo que la semana acaba de empezar.`);
      break;
    case DiasSemana.MARTES:
      console.log(`Es martes, ya superastes lunes.`);
      break;
    case DiasSemana.MIERCOLES:
      console.log(`Es miercoles, estas a la mitad de semana.`);
      break;
    case DiasSemana.JUEVES:
      console.log(`Es jueves, casi llega el fin de semana.`);
      break;
    case DiasSemana.VIERNES:
      console.log(`Es viernes, a celebrar.`);
      break;
    case DiasSemana.SABADO:
      console.log(`Es sábado, disfruta de tu descanso.`);
      break;
    case DiasSemana.DOMINGO:
      console.log(`Es domingo, relajate antes del lunes`);
  }
}

mensajePorDia(diaSeleccionado);