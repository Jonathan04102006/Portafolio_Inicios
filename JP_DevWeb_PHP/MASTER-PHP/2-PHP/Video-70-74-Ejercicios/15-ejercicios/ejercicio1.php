<?php

/* 
 * Ejercicio 1. Hacer un programa en PHP que tenga un array con 8 numeros enteros
 * y que haga lo siguiente:
 * - Recorrerlo y mostrarlo
 * - Ordenarlo y mostrarlo
 * - Mostrar su longitu
 * - Buscar algun elemento (buscar por el parametro que me lleve por la url)
 */

// FUNCIONES
function mostrarArray($numeros){
    $resultado = "";
    
    foreach ($numeros as $numero){
        // $resultado = $resultado.$numero."<br/>";
        $resultado .=$numero."<br/>";
    }
    
    return $resultado;
}

// Crear el array
$numeros = array(11,44,55,77,23,9,97,67);

//Recorrer y mostrar
echo "<h1>Recorrer y mostrar</h1>";
echo mostrarArray($numeros);

// Ordenarlo y mostrarlo
echo "<h1>Ordenarlo y mostrarlo</h1>";

sort($numeros);
echo mostrarArray($numeros);

// Mostrar su longitud
echo "<h1>Numero total de elementos</h1>";
echo count($numeros);

// Busqueda en el array
if(isset($_GET['numero'])){
    $busqueda = $_GET['numero'];
    
    echo "<h1>Buscar en el array el numero $busqueda</h1>";

    $search = array_search($busqueda, $numeros);
    if(!empty($search)){
        echo "<h4>El numero buscado existe en el array, en el indice $search</h4>";
    }else{
        echo "<h4>No existe el numero buscado</h4>";
    }
}


//$numeros = [1,2,3,4,5,6,7,8];
//var_dump($numeros);