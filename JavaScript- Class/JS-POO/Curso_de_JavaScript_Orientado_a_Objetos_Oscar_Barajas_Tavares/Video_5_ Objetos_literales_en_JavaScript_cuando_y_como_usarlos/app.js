/* Resumen
Los objetos literales en JavaScript son la vía más directa para modelar una entidad única: simples, expresivos y sin burocracia. Si buscas agrupar configuración, perfil actual o datos para una API, aquí encuentras cómo usarlos con claridad: notación de punto y corchetes, mutabilidad, métodos con this y cuándo preferir clases.

¿Cuándo usar un objeto literal en JavaScript?

Un objeto literal es una colección de datos entre llaves con pares clave:valor. Ideal para entidades únicas que no requieren instanciar con new ni definir un plano previo. Evita “matar moscas a cañonazos” cuando solo necesitas un contenedor claro y único.

Estructura única: configuración, perfil del usuario actual, carrito por sesión.
Lectura directa: lo que escribes es lo que obtienes.
Menos código: sin clases ni constructores cuando no hay copias múltiples.
¿Qué es la sintaxis clave:valor?

Propiedad a la izquierda y valor a la derecha, separados por dos puntos.
Todo dentro de llaves para agrupar datos coherentes.

const config = {
  tema: 'oscuro',
  idioma: 'es',
  notificaciones: true
};
¿Cuándo elegir clases o funciones constructoras?

Si necesitas múltiples copias (enemigos, productos), usa clases o funciones constructoras: son tus moldes.
Si necesitas una única instancia (configuración de la app, datos agrupados para enviar a una API), usa un objeto literal.
¿Cómo acceder y modificar propiedades con notación de punto y corchetes?

La notación de punto es limpia y legible; la notación de corchetes resuelve nombres complicados y claves dinámicas. Ambas son esenciales para leer y actualizar datos sin fricción.

¿Cómo funciona la notación de punto?

Acceso directo cuando la propiedad tiene un nombre simple.

const usuario = { nombre: 'Ana', edad: 28 };
console.log(usuario.nombre); // 'Ana'
¿Y la notación de corchetes y claves dinámicas?

Úsala con nombres no válidos para el punto (por ejemplo, con guion).
También cuando la clave viene en una variable.

const usuario = { 'last-name': 'Pérez', email: 'ana@correo.com' };
console.log(usuario['last-name']); // 'Pérez'

const campo = 'email';
console.log(usuario[campo]); // 'ana@correo.com'
Los objetos literales en JavaScript son mutables: puedes añadir o actualizar en cualquier momento.
Si la propiedad no existe, se crea; si existe, se actualiza.
Con delete eliminas propiedades, y al leerlas luego obtendrás undefined. Asegúrate de que tu código lo maneje.

const coche = { marca: 'Toyota', anio: 2020 };
coche.color = 'rojo'; // añade.
coche.marca = 'Mazda'; // actualiza.
delete coche.marca; // elimina.
console.log(coche.marca); // undefined
¿Cómo definir métodos y usar this correctamente?

Un método es una función asignada a una propiedad. El reto es el contexto: para referirte al propio objeto desde un método, usa this. Evita arrow functions para métodos porque no tienen su propio this y heredan del exterior (podría ser window), rompiendo la referencia al objeto.

¿Por qué usar this en métodos?

this apunta al objeto actual dentro del método.
Sin this, la función buscaría variables globales y fallaría.

const pajaro = {
  color: 'azul',
  cantar: function () {
    return `Canto porque soy ${this.color}`;
  },
  volar() {
    return `Volando en color ${this.color}`; // sintaxis corta de método.
  }
};
¿Qué problema tienen las arrow functions?

Las arrow functions no crean su propio this y, en un método, no apuntarán al objeto.
Usa función tradicional o sintaxis corta de método para asegurar el contexto correcto.

const ave = {
  color: 'verde',
  // Incorrecto para métodos: this no es el objeto.
  cantar: () => `Soy ${this.color}`
};
Regla práctica. Métodos de objetos: función tradicional o sintaxis corta.
Evita arrow functions en métodos; resérvalas para callbacks donde no necesites this. */