/* 🧩 Ejercicio 1: Racha de Victorias en Juegos
🎯 Objetivo:

Aplicar polimorfismo para calcular rachas en diferentes tipos de juegos.

📋 Enunciado:

Debes crear diferentes objetos que representen tipos de juegos, donde cada uno calcule una racha de victorias de forma distinta.

🔧 Requisitos:
Crea una clase base Juego.
Define un método calcularRacha(partidas) que será sobrescrito.
Crea las siguientes clases hijas:
JuegoDeportes
JuegoVideojuego
Cada clase debe implementar su propia lógica:
JuegoDeportes: contar la racha más larga de victorias consecutivas ("W").
JuegoVideojuego: contar la cantidad total de victorias, sin importar si son consecutivas.
📥 Entrada esperada:
const partidas = ["W", "W", "L", "W", "W", "W"];
📤 Salida esperada:
Deportes → 3 (racha más larga consecutiva)
Videojuego → 5 (total de victorias) */
console.log(`************************************************************************`);
class Juego {
  calcularRacha(partidas) {
    throw new Error("Este método debe ser implementado por las subclases");
  }
}

class JuegoDeportes extends Juego {
  calcularRacha(partidas) {
    let maxRacha = 0;
    let rachaActual = 0;

    for (const resultado of partidas) {
      if (resultado === "W") {
        rachaActual++;
        maxRacha = Math.max(maxRacha, rachaActual);
      } else {
        rachaActual = 0;
      }
    }

    console.log("Deportes →", maxRacha);
    return maxRacha;
  }
}

class JuegoVideojuego extends Juego {
  calcularRacha(partidas) {
    const totalVictorias = partidas.filter(r => r === "W").length;
    console.log("Videojuego →", totalVictorias);
    return totalVictorias;
  }
}

// Uso
const partidas = ["W", "W", "L", "W", "W", "W"];
const deportes = new JuegoDeportes();
const videojuego = new JuegoVideojuego();

deportes.calcularRacha(partidas);
videojuego.calcularRacha(partidas);

/* 🧩 Ejercicio 2: Racha de Actividad Física
🎯 Objetivo:

Usar polimorfismo para calcular rachas en diferentes tipos de actividad física.

📋 Enunciado:

Vas a modelar diferentes tipos de seguimiento de actividad donde cada uno interpreta la racha de forma distinta.

🔧 Requisitos:
Crea una clase base Actividad.
Método común: calcularRacha(registros).
Crea:
ActividadDiaria
ActividadSemanal
Lógica:
ActividadDiaria: contar días consecutivos con valor true.
ActividadSemanal: contar cuántas semanas tienen al menos 3 días activos.
📥 Entrada esperada:
const registros = [true, true, false, true, true, true, false];
📤 Salida esperada:
Diaria → 3 (máxima racha consecutiva)
Semanal → 1 (una semana con ≥3 días activos) */
console.log(`************************************************************************`);
class Actividad {
  calcularRacha(registros) {
    throw new Error("Este método debe ser implementado por las subclases");
  }
}

class ActividadDiaria extends Actividad {
  calcularRacha(registros) {
    let maxRacha = 0;
    let rachaActual = 0;

    for (const dia of registros) {
      if (dia) {
        rachaActual++;
        maxRacha = Math.max(maxRacha, rachaActual);
      } else {
        rachaActual = 0;
      }
    }

    console.log("Diaria →", maxRacha);
    return maxRacha;
  }
}

class ActividadSemanal extends Actividad {
  calcularRacha(registros) {
    const diasPorSemana = 7;
    let semanasActivas = 0;

    for (let i = 0; i < registros.length; i += diasPorSemana) {
      const semana = registros.slice(i, i + diasPorSemana);
      const diasActivos = semana.filter(dia => dia).length;
      if (diasActivos >= 3) {
        semanasActivas++;
      }
    }

    console.log("Semanal →", semanasActivas);
    return semanasActivas;
  }
}

// Uso
const registros = [true, true, false, true, true, true, false];
const diaria = new ActividadDiaria();
const semanal = new ActividadSemanal();

diaria.calcularRacha(registros);
semanal.calcularRacha(registros);

/* 🧩 Ejercicio 3: Racha en Redes Sociales
🎯 Objetivo:

Implementar polimorfismo para diferentes métricas de engagement.

📋 Enunciado:

Simula cómo distintas plataformas calculan rachas de interacción.

🔧 Requisitos:
Clase base RedSocial.
Método: calcularRacha(interacciones).
Clases hijas:
Instagram
Twitter
Lógica:
Instagram: contar la racha más larga de días con likes > 100.
Twitter: contar cuántos días tienen al menos 1 retweet.
📥 Entrada esperada:
const interacciones = [
    { likes: 120, retweets: 0 },
    { likes: 150, retweets: 2 },
    { likes: 80, retweets: 1 },
    { likes: 200, retweets: 0 },
];
📤 Salida esperada:
Instagram → 2 (dos días seguidos con likes > 100)
Twitter → 2 (dos días con retweets ≥ 1) */
console.log(`************************************************************************`);
class RedSocial {
  calcularRacha(interacciones) {
    throw new Error("Este método debe ser implementado por las subclases");
  }
}

class Instagram extends RedSocial {
  calcularRacha(interacciones) {
    let maxRacha = 0;
    let rachaActual = 0;

    for (const dia of interacciones) {
      if (dia.likes > 100) {
        rachaActual++;
        maxRacha = Math.max(maxRacha, rachaActual);
      } else {
        rachaActual = 0;
      }
    }

    console.log("Instagram →", maxRacha);
    return maxRacha;
  }
}

class Twitter extends RedSocial {
  calcularRacha(interacciones) {
    const diasConRetweet = interacciones.filter(dia => dia.retweets >= 1).length;
    console.log("Twitter →", diasConRetweet);
    return diasConRetweet;
  }
}

// Uso
const interacciones = [
  { likes: 120, retweets: 0 },
  { likes: 150, retweets: 2 },
  { likes: 80, retweets: 1 },
  { likes: 200, retweets: 0 },
];

const instagram = new Instagram();
const twitter = new Twitter();

instagram.calcularRacha(interacciones);
twitter.calcularRacha(interacciones);