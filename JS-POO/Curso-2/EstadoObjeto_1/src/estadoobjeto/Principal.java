/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package estadoobjeto;

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
        Auto a = new Auto();
        a.patente = "ABC123";
        a.color = "Verde";
        a.kms = 500;
        a.conAire = true;
        
        Auto otroAuto;
        otroAuto = null;
        
        System.out.println(a);
        System.out.println(otroAuto);
        
        System.out.println(a.color);
        otroAuto.color = "Azul";
        System.out.println(a.color);
    }
    
}
