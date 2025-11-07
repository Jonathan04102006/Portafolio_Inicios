package Video_15_THIS_en_JAVA;

/**
 *
 * @author jl958
 */
public class Principal {
    
    public static void main(String[] args){
        CuentaBancaria cb = new CuentaBancaria();
        
        cb.mostrarDatos();
        cb.setAlias("miAlias");
        cb.mostrarDatos();
    }
    
}
