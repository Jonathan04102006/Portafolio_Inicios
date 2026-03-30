/* 🧠 Ejercicio 1: Cuenta básica con validaciones
🎯 Objetivo:

Practicar closures manteniendo el saldo privado y agregando validaciones.

📝 Instrucciones:

Crea una función crearCuenta que:

Reciba un saldoInicial
Mantenga el saldo privado (closure)
Retorne un objeto con estos métodos:
depositar(cantidad)
retirar(cantidad)
consultarSaldo()
⚠️ Reglas:
No permitir depositar cantidades negativas
No permitir retirar más dinero del saldo
No permitir retirar cantidades negativas
💡 Ejemplo esperado:
const cuenta = crearCuenta(500);

console.log(cuenta.depositar(200)); // Saldo: 700
console.log(cuenta.retirar(100));   // Saldo: 600
console.log(cuenta.retirar(1000));  // Fondos insuficientes
console.log(cuenta.depositar(-50)); // Cantidad inválida */
console.log("****************************************************************");
function crearCuenta(saldoInicial) {
    let saldo = saldoInicial;

    return {
        depositar(cantidad) {
            if (cantidad <= 0) {
                return `Cantidad inválida`;
            }
            saldo += cantidad;
            return `Depositado $${cantidad}. Saldo actual: $${saldo}`;
        },
        retirar(cantidad) {
            if (cantidad > saldo){
                return `Fondos insuficientes`;
            }
            saldo -= cantidad;
            return `Depositado $${cantidad}. Saldo actual: $${saldo}`;
        },
        consultarSaldo() {
            return `Saldo actual: $${saldo}`;
        }
    }
}

const cuenta = crearCuenta(500);

console.log(cuenta.depositar(200)); // Saldo: 700
console.log(cuenta.retirar(100));   // Saldo: 600
console.log(cuenta.retirar(1000));  // Fondos insuficientes
console.log(cuenta.depositar(-50)); // Cantidad inválida

/* 🧠 Ejercicio 2: Historial de movimientos (Closure avanzado)
🎯 Objetivo:

Usar closures para manejar estado privado más complejo.

📝 Instrucciones:

Modifica la lógica de la cuenta para que:

Además del saldo, tenga un historial privado (array)
Cada operación (depositar o retirar) se guarde en el historial
🔧 Métodos requeridos:
depositar(cantidad)
retirar(cantidad)
consultarSaldo()
verHistorial()
📌 Formato del historial:
[
  "Depositado $200",
  "Retirado $50",
  "Depositado $100"
]
💡 Ejemplo esperado:
const cuenta = crearCuenta(300);

cuenta.depositar(200);
cuenta.retirar(50);

console.log(cuenta.verHistorial()); */
console.log("****************************************************************");
function crearCuenta(saldoInicial) {
  let saldo = saldoInicial;
  const historial = [];

  return {
    depositar(cantidad) {
      if (cantidad <= 0) {
        return "Cantidad inválida";
      }
      saldo += cantidad;
      historial.push(`Depositado $${cantidad}`);
      return `Saldo: ${saldo}`;
    },
    retirar(cantidad) {
      if (cantidad <= 0) {
        return "Cantidad inválida";
      }
      if (cantidad > saldo) {
        return "Fondos insuficientes";
      }
      saldo -= cantidad;
      historial.push(`Retirado $${cantidad}`);
      return `Saldo: ${saldo}`;
    },
    consultarSaldo() {
      return `Saldo: ${saldo}`;
    },
    verHistorial() {
      return historial;
    }
  };
}

const cuenta2 = crearCuenta(300);

cuenta2.depositar(200);
cuenta2.retirar(50);
cuenta2.depositar(100);

console.log(cuenta2.verHistorial());

/* 🧠 Ejercicio 3: Múltiples cuentas independientes
🎯 Objetivo:

Entender cómo los closures crean instancias independientes.

📝 Instrucciones:

Usa la función crearCuentaBancaria y:

Crea 3 cuentas diferentes
Realiza operaciones distintas en cada una
Verifica que los saldos NO se mezclen
💡 Ejemplo esperado:
const cuenta1 = crearCuentaBancaria(1000);
const cuenta2 = crearCuentaBancaria(500);
const cuenta3 = crearCuentaBancaria(200);

cuenta1.depositar(100); // 1100
cuenta2.retirar(100);   // 400
cuenta3.depositar(300); // 500

console.log(cuenta1.consultarSaldo()); // 1100
console.log(cuenta2.consultarSaldo()); // 400
console.log(cuenta3.consultarSaldo()); // 500
🔍 Pregunta clave:

👉 ¿Por qué cada cuenta mantiene su propio saldo aunque usan la misma función? */
console.log("****************************************************************");
function crearCuentaBancaria(saldoInicial) {
  let saldo = saldoInicial;
  const historial = [];

  return {
    depositar(cantidad) {
      if (cantidad <= 0) {
        return "Cantidad inválida";
      }
      saldo += cantidad;
      historial.push(`Depositado $${cantidad}`);
      return `Saldo: ${saldo}`;
    },
    retirar(cantidad) {
      if (cantidad <= 0) {
        return "Cantidad inválida";
      }
      if (cantidad > saldo) {
        return "Fondos insuficientes";
      }
      saldo -= cantidad;
      historial.push(`Retirado $${cantidad}`);
      return `Saldo: ${saldo}`;
    },
    consultarSaldo() {
      return `Saldo: ${saldo}`;
    },
    verHistorial() {
      return historial;
    }
  };
}

// Crear 3 cuentas diferentes
const cuenta3 = crearCuentaBancaria(1000);
const cuenta4 = crearCuentaBancaria(500);
const cuenta5 = crearCuentaBancaria(200);

// Operaciones distintas
cuenta3.depositar(100); // Saldo: 1100
cuenta4.retirar(100);   // Saldo: 400
cuenta5.depositar(300); // Saldo: 500

// Verificar que los saldos no se mezclan
console.log(cuenta3.consultarSaldo()); // Saldo: 1100
console.log(cuenta4.consultarSaldo()); // Saldo: 400
console.log(cuenta5.consultarSaldo()); // Saldo: 500   