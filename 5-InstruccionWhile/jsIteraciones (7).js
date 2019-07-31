function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";
	var promedio;
	var suma = 0;

	while (respuesta == "si") {

		contador = parseInt(prompt("Ingrese un numero: "));

		acumulador = acumulador + contador;

		while (isNaN(contador)) {

			contador = parseInt(prompt("Ese no es un numero, ingrese otro numero: "));
		}
		suma++;

		respuesta = parseInt(prompt("¿Quiere ingresar otro numero?"));

	}

	promedio = acumulador / suma

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN