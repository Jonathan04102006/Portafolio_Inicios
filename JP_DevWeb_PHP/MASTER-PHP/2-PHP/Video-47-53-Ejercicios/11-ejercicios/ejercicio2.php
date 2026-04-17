<?php

/* 
 * Ejercicio 2. Escribir un script en PHP que nos muestre por pantalla todos los
 * numero pares que hay del 1 al 100.
 */

echo "<h1>Numeros pares del 1 al 100</h1>";

for($i = 2; $i <= 100; $i += 2) {
    echo $i."\n";
}

/*
 * for)($i = 1; $1 <= 100; $i++){
 *      if($i%2 == 0){
 *          echo $i" <br/>";
 *      }
 * }
 */