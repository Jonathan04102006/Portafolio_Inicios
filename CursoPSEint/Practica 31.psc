Algoritmo sin_titulo
	
	Escribir "Bienvenido! a la calduladora!";
	Escribir "Escribe la operacion que deseas realizar!";
	
	Repetir
		Escribir "1.- Suma";
		Escribir "2.- Resta";
		Escribir "3.- Multiplicacion";
		Escribir "4.- Division";
		
		Leer opc;
		
		Segun opc Hacer
			1:
				Escribir "Eligiste hacer una SUMA";
				Escribir "Ingresa el numero 1 para SUMAR: ";
				Leer num1;
				Escribir "Ingresa el numero 2 para SUMAR: ";
				Leer num2;
				res <- num1 + num2;
				Escribir "El resultado de la SUMA entre ", num1, "y", num2, " es: ", res;
			2:
				Escribir "Eligistes hacer una RESTA";
			3:
				Escribir "Eligistes hacer una MULTIPLICACION";
			3:
				Escribir "Eligistes hacer una DIVISION";	
			De Otro Modo:
				Escribir "Eligistes una opcion INCORRECTA";
				
		Fin Segun
		
	Hasta Que opc > 0 & opc < 5;
	
FinAlgoritmo
