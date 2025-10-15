<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$bd = "listado";

$conn = new mysqli($servidor, $usuario, $password, $bd);

if ($conn->connect_error) {
    die("La conexión ha fallado: " . $conn->connect_error);
}

$sql = "SELECT id,nombre_de_lenguaje AS lenguaje, creador, inicio FROM lenguajes
WHERE inicio<2000 AND nombre_de_lenguaje LIKE 'Jav%' /**Selecciona un limite */
ORDER BY inicio DESC, lenguaje ASC /** ASC(de menor a mayor) o DESC(de mayor a menor) */
-- LIMIT 4 /**Limita cuantos se imprimiran */
-- OFFSET 1 /**Se salta uno */
";
$resultado = $conn->query($sql);

$lenguajes=array();
if ($resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        $lenguajes[] = $fila;
    }
}
$conn->close();
header('Content-Type:application/json');
echo json_encode($lenguajes);
?>