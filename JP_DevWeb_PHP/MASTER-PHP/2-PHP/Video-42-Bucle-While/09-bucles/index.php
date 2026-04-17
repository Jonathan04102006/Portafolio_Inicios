<?php

/*
 * BUCLE WHILE
 * Estructura de control que itere o repita la ejecucion de una serie de instrucciones
 * tantas veces como sea necesario, en base a una condion.
 * 
 * whie(condicion) [
 *      bloque de instrucciones
 *      otra instruccion
 * ]
 * 
 */

$numero = 0;
while($numero <= 100) {
    echo "$numero";
    
    if($numero != 100){
        echo", ";
    }
    $numero++;
}