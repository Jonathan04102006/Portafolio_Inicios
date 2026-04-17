/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Video_14_PUBLIC_PRIVATE;

/**
 *
 * @author jl958
 */
public class Principal {

    public static void main(String[] args) {
        CuentaBancaria cb = new CuentaBancaria();
        
        cb.mostrarDatos();
        cb.establecerAlias("miNuevoAlias");
        cb.mostrarDatos();
        cb.establecerAlias(null);
        cb.mostrarDatos();
        
        String a = cb.obtenerAlias();
        System.out.println(a);
        
        // se marca en rojo por que esta en private
        // cb.saldoDisponible(500);
    }
    
}
