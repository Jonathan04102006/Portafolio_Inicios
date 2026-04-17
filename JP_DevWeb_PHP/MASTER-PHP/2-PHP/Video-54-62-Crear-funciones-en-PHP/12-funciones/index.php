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

/*
for($i = 0; $i <= 10; $i++){
    tabla($i);
}
 */

// Ejemplo 3

function calculadora($numero1, $numero2, $negrita = false){
    
    // Conjunto de instrucciones a ejecutar
    $suma = $numero1 + $numero2;
    $resta = $numero1 - $numero2;
    $multi = $numero1 * $numero2;
    $division = $numero1 / $numero2;
    
    $cadena_texto = "";
    
    if($negrita){
        $cadena_texto .= "<h1>";
    }
    
    $cadena_texto .= "Suma: $suma <br/>";
    $cadena_texto .= "Resta: $resta <br/>";
    $cadena_texto .= "Multiplicacion : $multi <br/>";
    $cadena_texto .= "Division: $division <br/>";
    
    if($negrita){
        $cadena_texto .= "</h1>";
    }
    
    $cadena_texto .= "<hr/>";
    
    return $cadena_texto;
}

echo calculadora(10, 20, true);

// Ejemplo 4

function getNombre($nombre){
    $texto = "El nombre es: $nombre";
    return $texto;
}

function getApellidos($apellidos){
    $texto = "Los apellidos son: $apellidos <br/>";
    return $texto;
}

function devuelveElNombre($nombre, $apellidos){
    $texto = getNombre($nombre)
        . "<br/>".
        getApellidos($apellidos);
    return $texto;
}

echo devuelveElNombre("Jonathan", "Perez");
// echo getNombre("Roshan");
