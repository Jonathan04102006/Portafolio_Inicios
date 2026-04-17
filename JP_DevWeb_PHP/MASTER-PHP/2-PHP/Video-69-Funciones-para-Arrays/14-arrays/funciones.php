<?php

$cantantes = ['2pac', 'Drake', 'Jennifer Lopez', 'Alfredo'];
$numeros = [1,2,3,4];


// asort($cantantes);
// var_dump($cantantes);

// Ordenar
asort($numeros);
var_dump($numeros);

// Añadir elemento array
$cantantes[] = "Natos";
array_push($cantantes, "Waor");

// Eliminar elementos array
array_pop($cantantes);
unset($cantantes[2]);

// Aleatorio
$indice = array_rand($cantantes);
echo $cantantes[$indice];

// dar la vuelta
var_dump(array_reverse($numeros));

// Buscar dentro de un array
$resultado = array_search('Alfredo', $cantantes);
var_dump($resultado);

// Contar numero de elementos
echo sizeof($cantantes);