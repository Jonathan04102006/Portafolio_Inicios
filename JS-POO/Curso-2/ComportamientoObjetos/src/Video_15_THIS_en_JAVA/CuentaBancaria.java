/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Video_15_THIS_en_JAVA;

/**
 *
 * @author jl958
 */
public class CuentaBancaria {
    private String CBU;
    private String alias;
    private double saldo;
    
    public void mostrarDatos (){
        System.out.println(this);
        System.out.println(CBU + " " + alias + " " + saldo);
    }

    public String getCBU() {
        return CBU;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        if (alias != null){
            this.alias = alias;
        }
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
    
    void extraer (double monto){
        if ( saldoDisponible(monto) ){
            saldo = saldo - monto; // saldo -= monto
        }
    }
}

