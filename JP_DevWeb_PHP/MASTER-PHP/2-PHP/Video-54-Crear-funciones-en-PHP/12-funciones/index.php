<?php

/* 
 * FUNCIONES:
 * Una funcion es un conjunto de instrucciones agrupadas bajo un nombre concreto
 * y que pueden reutilizarse solamente invocando a la funcion tantas veces como
 * queramos.
 * 
 * funition nombreDeMiFuncion(){
 *      // BLOQUE / CONJUNTO DE INSTRUCCIONES
 * }
 * 
 * nombreDeMIFuncion($mi_parametro);
 * nombreDeMIFuncion($mi_parametro);
 */

// Ejemplo 1
/*function muestraNombre(){
    echo "Jonathan Perez <br/>";
    echo "Angel Perez <br/>";
    echo "Karen Perez <br/>";
    echo "Dimas Perez <br/>";
    echo "Maria Lopez <br/>";
    echo "<hr/>";
}

// Invocar funtion
muestraNombre();
muestraNombre();
*/

// Ejemplo 2
function tabla($numero){
    echo "<h3> Tabla de multiplicar del numero: $numero</h3>";
    for($i = 1 ; $i <= 10; $i++){
        $operacion = $numero*$i;
        echo "$numero x $i = $operacion <br/>";
    }
}

// tabla (77);
/*
if(isset($_GET['numero'])){
    tabla ($_GET['numero']);
    tabla(5);
    tabla(9);
}else{
    echo "No hay numero para sacar la tabla";
}
*/

for($i = 0; $i <= 10; $i++){
    tabla($i);
}