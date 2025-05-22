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
			2:
				Escribir "Eligistes hacer una RESTA";
			3:
				Escribir "Eligistes hacer una MULTIPLICACION";
			3:
				Escribir "Eligistes hacer una DIVISION";	
			De Otro Modo:
				Escribir "Eligistes una opcion INCORRECTA";
				
		Fin Segun
		
	Hasta Que opc > 0 && opc < 5;
	
FinAlgoritmo
