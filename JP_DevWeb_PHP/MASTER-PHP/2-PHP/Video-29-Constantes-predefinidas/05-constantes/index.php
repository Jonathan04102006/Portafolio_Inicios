<?php

// Constantes
// Es un contenedor de información que no puede variar

define('nombre', 'Jonathan Pérez');
define ('web', 'jl958329@gmail.com');

echo '<h1>'.'Constante'.'</h1>';
echo '<h2>'.nombre.'</h2>';
echo '<h2>'.web.'</h2>';

echo '<br>';

// Variable

echo '<h1>'.'Variable'.'</h1>';
$web = "jonapere0406@gmail.com";
echo '<h2>'.$web.'</h2>';

$web = "jl958329@gmail.com";
echo '<h2>'.$web.'</h2>';

// Constantes predefinidas

// Tipo de sistema
echo PHP_OS;

echo '<br>';

// Versión de PHP
echo PHP_VERSION;

echo '<br>';

// Ubicación de las extensiones de PHP
echo PHP_EXTENSION_DIR;

echo '<br>';

// Imprime el N° en la que esta escrito, en este caso 42
echo __LINE__;

echo '<br>';

// Muestra la ruta del DOC PHP
echo __FILE__;

echo '<br>';

// Muestra el nombre en la función en que está
function holaMundo(){
    echo __FUNCTION__;
}

holaMundo();