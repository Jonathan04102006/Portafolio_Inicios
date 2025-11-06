/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package comportamientoobjetos;

/**
 *
 * @author jl958
 */
public class Principal {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        CuentaBancaria cb = new CuentaBancaria();
        
        cb.mostrarDatos();
        cb.CBU = "123456789";
        cb.alias = "miCuenta";
        cb.saldo = 0.0;
        
        double x = cb.obtenerSaldo();
        System.out.println(cb.obtenerSaldo());
        cb.depositar(200);
        System.out.println(cb.obtenerSaldo());
        cb.depositar(-50);
        System.out.println(cb.obtenerSaldo());
        cb.extraer(180);
        System.out.println(cb.obtenerSaldo());
        cb.extraer(100);
        System.out.println(cb.obtenerSaldo());
         
    }
    
}
