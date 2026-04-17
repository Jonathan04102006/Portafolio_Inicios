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

echo "<hr/>";

// Ejemplo

if(isset($_GET['numero'])) {
    // Cambiar tipo de dato
    $numero = (int)$_GET['numero'];
}else{
    $numero = 1;
}

echo "<h1>Tabla de multiplicar del numero $numero</h1>";

$contador = 2;
while($contador <= 10) {
    echo "$numero x $contador = ".($numero*$contador)."<br/>";
    $contador++;
}