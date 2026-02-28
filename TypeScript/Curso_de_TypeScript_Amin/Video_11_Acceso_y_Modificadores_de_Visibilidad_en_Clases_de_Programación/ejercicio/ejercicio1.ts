import { CuentaBancaria } from "./index";

const cuenta = new CuentaBancaria("Ariel", 1000);

console.log(`Saldo actual: ${cuenta.obtenerSaldo()}`);

cuenta.depositar(500);
cuenta.depositar(-200);

console.log(`Saldo actual: ${cuenta.obtenerSaldo()}`);