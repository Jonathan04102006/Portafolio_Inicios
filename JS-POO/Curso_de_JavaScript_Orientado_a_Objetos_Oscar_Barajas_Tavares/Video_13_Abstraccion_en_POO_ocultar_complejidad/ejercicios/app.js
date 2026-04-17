/* 🧠 Ejercicio 1: Clase “Cafetera”
🎯 Objetivo:

Aplicar abstracción ocultando los pasos internos de cómo se prepara el café.

📋 Instrucciones:

Debes crear una clase llamada Cafetera que simule el proceso de hacer café.

🔧 Requisitos:
La clase debe tener:
Un método público: hacerCafe()
Métodos privados (simulados con _ o #):
calentarAgua()
molerCafe()
servirCafe()
El método hacerCafe() debe ejecutar los pasos internos en orden.
Desde fuera de la clase solo se debe llamar a hacerCafe(), no a los métodos internos.
✅ Resultado esperado:

Al ejecutar:

const cafetera = new Cafetera();
cafetera.hacerCafe();

Debe mostrar algo como:

Calentando agua...
Moliendo café...
Sirviendo café... */
console.log(`************************************************************************`);
class Cafetera {
  #calentarAgua() {
    console.log("Calentando agua...");
  }

  #molerCafe() {
    console.log("Moliendo café...");
  }

  #servirCafe() {
    console.log("Sirviendo café...");
  }

  hacerCafe() {
    this.#calentarAgua();
    this.#molerCafe();
    this.#servirCafe();
  }
}

// Uso
const cafetera = new Cafetera();
cafetera.hacerCafe();

/* 🧠 Ejercicio 2: Sistema de Login
🎯 Objetivo:

Ocultar la lógica interna de validación de usuario.

📋 Instrucciones:

Crea una clase llamada SistemaLogin.

🔧 Requisitos:
Debe tener:
Método público: login(usuario, password)
Métodos internos:
validarUsuario(usuario)
validarPassword(password)
El método login debe:
Usar los métodos internos para validar
Mostrar:
"Acceso concedido" si todo es correcto
"Acceso denegado" si algo falla
Los métodos de validación no deben ser accesibles directamente desde fuera.
💡 Pista:

Puedes simular validación así:

usuario === "admin"
password === "1234"
✅ Resultado esperado:
const sistema = new SistemaLogin();
sistema.login("admin", "1234");

Salida:

Acceso concedido */
console.log(`************************************************************************`);
class SistemaLogin {
  #validarUsuario(usuario) {
    return usuario === "admin";
  }

  #validarPassword(password) {
    return password === "1234";
  }

  login(usuario, password) {
    if (this.#validarUsuario(usuario) && this.#validarPassword(password)) {
      console.log("Acceso concedido");
    } else {
      console.log("Acceso denegado");
    }
  }
}

const sistema = new SistemaLogin();
sistema.login("admin", "1234");
sistema.login("user", "1234");

/* 🧠 Ejercicio 3: Reproductor de Música
🎯 Objetivo:

Ocultar los detalles técnicos de reproducción.

📋 Instrucciones:

Crea una clase llamada Reproductor.

🔧 Requisitos:
Método público:
reproducir(cancion)
Métodos internos:
cargarArchivo(cancion)
iniciarReproduccion()
El usuario solo debe interactuar con reproducir
Internamente debe:
Cargar la canción
Iniciar la reproducción
✅ Resultado esperado:
const player = new Reproductor();
player.reproducir("Mi canción favorita");

Salida:

Cargando: Mi canción favorita
Reproduciendo música... */
console.log(`************************************************************************`);
class Reproductor {
  #cargarArchivo(cancion) {
    console.log(`Cargando: ${cancion}`);
  }

  #iniciarReproduccion() {
    console.log("Reproduciendo música...");
  }

  reproducir(cancion) {
    this.#cargarArchivo(cancion);
    this.#iniciarReproduccion();
  }
}

const player = new Reproductor();
player.reproducir("Mi canción favorita");   