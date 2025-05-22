Algoritmo sin_titulo
	
	Escribir "Ingresa la cantidad de las materias";
	Leer mat;
	
	acum <- 0;
	
	Para i<-1 Hasta mat Con Paso 1 Hacer
		
		Escribir "Ingresar la calificacion de la materia", i;
		Leer calif;
		
		acum <-acum + calif;
		
	Fin Para
	
	prom <-acum / mat;
	
	Escribir "El promedio es: ", prom;
	
FinAlgoritmo
