// IMPORTAR MÓDULOS Y CREAR INTERFAZ
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// DEFINIR CLASES
class Restaurante {
  constructor() {
    this.comidas = ["Pizza", "Hamburguesa", "Ensalada"];
    this.bebidas = ["Agua", "Refresco", "Cafe"];
  }

  // Métodos separados con nombres distintos
  mostrarMenuComidas() {
    console.log("\nMenú de comidas:");
    console.log(this.comidas.join(" - "));
  }

  mostrarMenuBebidas() {
    console.log("Menú de bebidas:");
    console.log(this.bebidas.join(" - "));
  }

  esComidaValida(platillo) {
    return this.comidas.includes(platillo);
  }

  esBebidaValida(bebida) {
    return this.bebidas.includes(bebida);
  }
}

class Pedido {
  constructor(platillo, bebida) {
    this.platillo = platillo;
    this.bebida = bebida;
  }

  mostrar() {
    console.log(`\n Su pedido: ${this.platillo} con ${this.bebida}`);
  }
}

function manejarPedido(restaurante) {
  // Mostrar menú de comidas y pedir selección
  restaurante.mostrarMenuComidas();

  rl.question("¿Qué platillo desea? ", (platillo) => {
    const platilloLimpio = platillo.trim();

    // Validar comida
    if (!restaurante.esComidaValida(platilloLimpio)) {
      console.log(" No existe ese platillo");
      return manejarPedido(restaurante); // Reiniciar desde el inicio
    }

    // Mostrar menú de bebidas y pedir selección
    console.log(""); // Salto de línea para mejor legibilidad
    restaurante.mostrarMenuBebidas();

    rl.question("¿Qué bebida desea? ", (bebida) => {
      const bebidaLimpia = bebida.trim();

      // Validar bebida
      if (!restaurante.esBebidaValida(bebidaLimpia)) {
        console.log(" No existe esa bebida");
        return manejarPedido(restaurante); // Reiniciar desde el inicio
      }

      // Paso C: Mostrar pedido y preguntar si quiere más
      const pedido = new Pedido(platilloLimpio, bebidaLimpia);
      pedido.mostrar();

      rl.question("\n¿Desea agregar algo más? (S/N): ", (respuesta) => {
        if (respuesta.trim().toUpperCase() === "N") {
          console.log("\n ¡Disfrute de su comida!");
          close(); // Terminar programa
        } else {
          manejarPedido(restaurante); // Nuevo pedido
        }
      });
    });
  });
}

// MENSAJE DE BIENVENIDA
console.log(`
========================== BIENVENIDO AL RESTAURANTE BUEN SABOR ==========================
    
                           ====================================
                           ||              MENÚ              ||                               
                           ||                                ||
                           || PIZZA - HAMBURGUESA - ENSALADA ||
                           ||                                ||
                           ||     AGUA - REFRESCO - CAFE     ||
                           ====================================
`);

// CREAR INSTANCIA Y EMPEZAR
const restaurante = new Restaurante();
manejarPedido(restaurante);