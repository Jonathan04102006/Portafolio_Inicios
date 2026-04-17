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
 * 
 * // OPERADORES LOGICOS
 * && AND Y 
 * || OR O
 * ! NOT NO
 * and, or
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

echo "<hr>";

// Ejemplo 4

//$dia = 5;
/*
if($dia == 1){
    echo "Es Lunes";
}else{
    if($dia == 2){
        echo "Es Martes";
    }else{
        if($dia == 3){
            echo "Es Miercoles";
        }else{
            if($dia == 4){
                echo "Es Jueves";
            }else{
                if($dia == 5){
                    echo "Es Viernes";
                }else{
                    echo "Es fin de semana";
                }
            }
        }
    }
}
 */

$dia = 6;
if($dia == 1){
    echo "LUNES";
}elseif($dia == 2){
    echo "MARTES";
}elseif($dia == 3){
    echo "MIERCOLES";
}elseif($dia == 4){
    echo "JUEVES";
}elseif($dia == 5){
    echo "VIERNES";
}else{
    echo "ES FIN DE SEMANA";
}
echo "<hr/>";

// Ejemplo 5
$edad1 = 18;
$edad2 = 64;
$edad_oficial = 63;

if($edad_oficial >= $edad1 && $edad_oficial <= $edad2){
    echo "ESTA EN EDAD DE TRABAJAR";
}else{
    echo "NO PUEDE TRABAJAR";
}

echo "<hr>";

$pais = "Mexico";
if($pais == "Mexico" || $pais == "España" || $pais == "Colombia"){
    echo "En este pais se habla enpañol";
}else{
    echo "no se habla español";
}