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
        CuentaBancaria cb = new CuentaBancaria();
        
        cb.mostrarDatos();
        cb.setAlias("miNuevoAlias");
        cb.mostrarDatos();
        cb.setAlias(null);
        cb.mostrarDatos();
        
        String a = cb.getAlias();
        System.out.println(a);
    }
    
}
