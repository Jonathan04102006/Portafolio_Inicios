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
        System.out.println(a.patente + " " + a.color + " " + a.kms + " " + a.conAire);
        a.patente = "ABC123";
        a.color = "Verde";
        a.kms = 500;
        a.conAire = true;
        System.out.println(a.patente + " " + a.color + " " + a.kms + " " + a.conAire);
        
        Auto a2 = new Auto();
        System.out.println(a2.patente + " " + a2.color + " " + a2.kms + " " + a2.conAire);
        a2.patente = "DEF456";
        a2.color = "Azul";
        a2.kms = 150;
        a2.conAire = false;
        System.out.println(a2.patente + " " + a2.color + " " + a2.kms + " " + a2.conAire);
        
        Auto a3 = new Auto();
        System.out.println(a3);
        a3.patente = "ABC123";
        a3.color = "Verde";
        a3.kms = 500;
        a3.conAire = true;
        System.out.println(a3);
        
        Auto a4 = new Auto();
        System.out.println(a4);
        a4.patente = "DEF456";
        a4.color = "Azul";
        a4.kms = 150;
        a4.conAire = false;
        System.out.println(a4);
    }
    
}
