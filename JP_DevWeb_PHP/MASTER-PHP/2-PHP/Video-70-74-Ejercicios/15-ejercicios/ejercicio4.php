<?php

/* 
 * Ejercicio 4. Crear un script en php que tenga 4 variables, una de tipo array,
 * otra de tipo string, otra int y otra booleana y que inprima un mensaje
 * segun el tipo de variable que sea.
 */

$matriz = array("Hola mundo", 88);
$titulo = "Master en PHP";
$numero = 77;
$verdadero = true;

if(is_array($matriz)){
    echo "<h1>El array es un array</h1>";
}

if(is_string($titulo)){
    echo "<h1>$titulo</h1>";
}

if(is_bool($verdadero)){
    echo "El boleano es verdadero";
}