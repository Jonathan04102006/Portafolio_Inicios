<?php
$lenguajes1 = [
    "JavaScript" => [
        "nombre" => "JavaScript",
        "inicio" => 1995],
    "React" => [
        "nombre" => "React",
        "inicio" => 2013],
    "Next" => [
        "nombre" => "Next.js",
        "inicio" => 2016],
    "PHP" => [
        "nombre" => "PHP",
        "inicio" => 1994],
];
echo"<div>El año de aparicion de JavaScript ".$lenguajes1["JavaScript"]["inicio"]."</div>";
$resultado = array_filter($lenguajes1,function($datos){
    return $datos["inicio"] > 2000;
});

foreach($resultado as $nombre=>$valor){
    echo "<div>". $valor["nombre"]."aparecio en ". $valor["inicio"]. "</div>";
}

$nuevoArray=array_map(function($nombre,$valor){
    $contendo="<div>". $valor["valor"]."aparecio en ".$valor["inicio"]."</div>";
    echo $contenido;
    return $contenido;
},array_keys($resultado),array_values($resultado));
?>