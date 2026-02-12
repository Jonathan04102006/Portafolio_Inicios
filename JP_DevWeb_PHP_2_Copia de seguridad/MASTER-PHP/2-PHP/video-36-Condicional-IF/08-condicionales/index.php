<?php

/*
 *  CONDICIONALES
 * 
 *  IF:
 *      if(condicion) {
 *      instrucciones
 * }else{
 *      otras instrucciones
 * }
 * 
 *  OPERADORES DE COMPARACION
 *  == igual
 *  === identico
 *  != distinto o diferente
 *  < menor que
 *  > mayor que
 *  <= menor o igual que
 *  >= mayor o igual que
 */

$color = "verde";

if($color == "rojo"){
    echo "EL COLOR ES ROJO";
}else{
    echo "el color NO es rojo";
}
echo "<br>";

$year = 2019;
if($year >= 2019){
    echo "Estamos de 2019 en adelante";
}else{
    echo "Estamos en 2019";
}