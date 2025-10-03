<?php
    $nombre=json_decode(file_get_contents("php://input"),true);
    $dato = $nombre["lenguaje"];
    $array = $nombre["miArray"];

    $nuevoObjeto = array(
        "lenguaje" => $dato,
        "inicio" => date("Y")
    );

    $array[] = $nuevoObjeto;
    
    $respuesta=json_encode($array);
    echo $respuesta;
    //echo "Soy ".$dato;
?>