<?php
include 'datosConexion.php';

$sql="SELECT * FROM mitabla";
$result=$sconn->query($sql);
$data=array();
if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
        $data[]=array(
            'id'=>$row["id"],
            'titulo'=>$row["titulo"],
            'datos'=>$row["datos"],
        )
    }
}

$jsonData=json_encode($data);
echo $jsonData;
$conn->Close();
?>