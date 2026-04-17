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

// Ejemplo 1
$color = "verde";
if($color == "rojo"){
    echo "EL COLOR ES ROJO";
}else{
    echo "el color NO es rojo";
}
echo "<br>";


// Ejemplo 2
$year = 2019;
if($year >= 2019){
    echo "Estamos de 2019 en adelante";
}else{
    echo "Estamos en 2019";
}

// Ejemplo 3
$nombre = "David Extremadura";
$ciudad = "madrid";
$continente = "Asia";
$edad = 49;
$mayoria_edad = 18;

if($edad >= $mayoria_edad){
    echo "<h1>$nombre es mayor de edad</h1>";
    
    if($continente == "Europa"){
        echo "<h2>Y es de $ciudad</h2>";
    }else{
        echo "No es Europeo";
    }
    
}else{
    echo "<h2>$nombre No es mayor de edad</h2>";
}