//Division
Funcion res <- division ( num1, num2 )
	res <- num1 / num2;
Fin Funcion

//Muliplicacion
Funcion multiplicacion (num1, num2)
	res <- num1 * num2;
	Escribir "El resultado de la multiplicacion entre: ", num1, " y ", num2, " es: ", res;
Fin Funcion

//Resta
Funcion resta
	Escribir "Ingresa el numero 1 para RESTAR";
	Leer num1;
	Escribir "Ingresa el numero 2 para RESTAR";
	Leer num2;
	res <- num1 - num2;
	Escribir "El resultado de la resta entre: ", num1, " y ", num2, " es: ", res;
Fin Funcion

Algoritmo Calculadora
	
	Escribir "Bienvenido! a la calduladora!";
	Escribir "Escribe la operacion que deseas realizar!";
	
	Repetir
		Escribir "1.- Suma";
		Escribir "2.- Resta";
		Escribir "3.- Multiplicacion";
		Escribir "4.- Division";
		
		Leer opc;
		
		Segun opc Hacer
			1://SUMA
				Escribir "Eligiste hacer una SUMA";
				Escribir "Ingresa el numero 1 para SUMAR: ";
				Leer num1;
				Escribir "Ingresa el numero 2 para SUMAR: ";
				Leer num2;
				res <- num1 + num2;
				Escribir "El resultado de la SUMA entre ", num1, " y ", num2, " es: ", res;
				
			2://RESTA
				Escribir "Eligistes hacer una RESTA";
				resta;
				
			3://MULTIPLICACION
				Escribir "Eligistes hacer una MULTIPLICACION";
				Escribir "Ingresa el numero 1 para MULTIPLICAR";
				Leer num1;
				Escribir "Ingresa el numero 2 para MULTIPLICAR";
				Leer num2;
				multiplicacion(num1, num2);
				
			4://DIVION
				Escribir "Eligistes hacer una DIVISION";
				Escribir "Ingresa el numero 1 para DIVISION";
				Leer num1;
				Escribir "Ingresa el numero 2 para DIVISION";
				Leer num2;
				Escribir "El resultado de la division entre: ", num1, " y ", num2, " es: ", division(num1, num2);
				
			//0 o 5... incorrecto	
			De Otro Modo:
				Escribir "Eligistes una opcion INCORRECTA";
				
		Fin Segun
		
		// Pregunta al usuario si desea realizar otra operación
		Escribir "¿Deseas realizar otra operacion? (S/N)";
		Leer opc2;
		
		Si opc2 = 's' | opc2 = 'S' Entonces
			opc <- 0;
			Escribir "Escribe la operacion que deseas realizar: "
		SiNo
			Escribir "Gracias! Por utilizar este programa!";
		Fin Si
		
	Hasta Que opc > 0 & opc < 5;
	
FinAlgoritmo
