<?php

/* 
Crear un array con el contenido de la tabla:
 * ACCION   AVENTURA    DEPORTES
 * GTA      ASSASINS    FIFA 19
 * COD      CRASH       PES 19
 * PUBG     Prince of   MOTO GP 19
 *          persia
 * 
 * Cada fila debe ir en un fichero separado(includes).
 */

$tabla = array(
    "ACCION"   => array("GTA 5", "Call of Duty", "PUBG"),
    "AVENTURA" => array("Assasins Creed", "Crash Bandicoot", "Prince of persia"),
    "DEPORTES" => array("Fifa 19", "PES 19", "Moto GP 19")
);

$categorias = array_keys($tabla);
?>

<table border="1">
    <?php include_once 'ejercicio5/encabezados.php'; ?>
    <?php include_once 'ejercicio5/primera.php'; ?>
    <?php include_once 'ejercicio5/segunda.php'; ?>
    <?php include_once 'ejercicio5/tercera.php'; ?>
</table>