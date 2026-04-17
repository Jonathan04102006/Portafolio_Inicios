<?php

// Operadores aritméticos

$numero1 = 55;
$numero2 = 33;

echo 'Suma: '.($numero1+$numero2).'<br/>';
echo 'Resta: '.($numero1-$numero2).'<br/>';
echo 'Multiplicación: '.($numero1*$numero2).'<br/>';
echo 'Divión: '.($numero1/$numero2).'<br/>';
echo 'Resto: '.($numero1%$numero2).'<br/>';


// Operadores incremento y decremento
$year = 2019;
echo '<h1>'.$year.'</h1>'.'<br/>';

// Incremento
$year++;
echo '<h1>'.$year.'</h1>'.'<br/>';

// Decremento
$year--;
echo '<h1>'.$year.'</h1>'.'<br/>';

// Pre-incremento
++$year;
echo '<h1>'.$year.'</h1>'.'<br/>';

// Pre-decremento
--$year;
echo '<h1>'.$year.'</h1>'.'<br/>';