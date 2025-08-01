<?php
include 'datosConexion.php';

$sql = "SELECT * FROM mitabla";
$result = $conn->query($sql);
$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            'id' => $row["id"],
            'titulo' => $row["titulo"],
            'datos' => json_decode($row["datos"])
        );
    }
}

// Devuelve un JSON al frontend
echo json_encode($data);
$conn->close();
?>
