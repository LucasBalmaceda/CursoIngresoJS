function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota = Math.floor(Math.random()* 10 + 1);

    if(nota > 7){

		alert("Su nota es: " + nota + " Excelente");
	}
	else if(nota >4){

	    alert("Su nota es: " + nota + "Aprobo");
	}

	else{
		alert("Su nota es: " + nota + "Vamos que la proxima se puede");
	}

}//FIN DE LA FUNCIÓN