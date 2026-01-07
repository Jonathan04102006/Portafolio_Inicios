<?php

/* 
 * ARRAYS
 * Un array es una coleccion o un conjunto de datos/valores, bajo un unico nombre.
 * Para acceder a esos valores podemos usar un indice numero o alfanumerico.
 */

$pelicula = "Batman";
$peliculas = array('Batman', 'Spiderman', 'El señor de los anillos');
$cantantes = ['2pac', 'Drake', 'Jennifer Lopez'];

// Array asociativo
$personas = array (
    'nombre' => 'Jonathan',
    'apellidos' => 'Perez',
    'web' => 'https://www.youtube.com/@Arrel_00'
);

echo $personas['apellidos'];

// Recorrer con FOR
echo "<h1>Listado de peliculas<h1/>";

echo "<ul>";

for($i = 0; $i < count($peliculas); $i++){
    echo "<li>"."$peliculas[$i]"."</li>";
}

echo "</ul>";

// Recorrer con Foreach
echo "<h1>Listado de cantantes</h1>";

echo "<ul>";
foreach ($cantantes as $key => $cantante){
    echo "<li>"."$cantante"."</li>";
}
echo "</ul>";