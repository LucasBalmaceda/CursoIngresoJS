function mostrar() {

	var num;
	var respuesta;
	var suma = 0;
	var promedio;
	var i = 0;

	do{

		num = parseInt(prompt("Ingrese un numero: "));

		while(isNaN(num)){

			num = parseInt(prompt("Ese no es un numero valido. Ingrese un numero: "));
		}
		
		suma = suma + num;
	
		i++;
		
		promedio = suma / i;

		respuesta = prompt("¿Quiere ingresar otro numero?");
	}while(respuesta == "s");

document.getElementById("suma").value = suma;

document.getElementById("promedio").value = promedio;
}//FIN DE LA FUNCIÓN