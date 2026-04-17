/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Video_14_PUBLIC_PRIVATE;

/**
 *
 * @author jl958
 */
public class CuentaBancaria {
    private String CBU;
    private String alias;
    private double saldo;
    
    public void mostrarDatos (){
        System.out.println(CBU + " " + alias + " " + saldo);
    }

    public double obtenerSaldo(){
        return saldo;
    }

    public void establecerAlias(String nuevoAlias){
        if (nuevoAlias != null) {
            alias = nuevoAlias;
        }
    }
    
    public String obtenerAlias() {
        return alias;
    }

    public double setSaldo() {
        return saldo;
    }
    
    public void depositar(double monto){
        if (monto > 0){
        saldo = saldo + monto; // saldo += monto
        }
    }
    
    private boolean saldoDisponible(double monto){
        return saldo >= monto;
    }
    
    public void extraer (double monto){
        if ( saldoDisponible(monto) ){
            saldo = saldo - monto; // saldo -= monto
        }
    }
}
