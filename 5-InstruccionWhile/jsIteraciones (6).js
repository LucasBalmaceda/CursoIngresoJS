function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numero;

while(contador < 5){

	numero = parseInt(prompt("Ingrese un número: "));

	while(isNaN(numero)){

		numero = parseInt(prompt("Ingrese un numero valido: "));
	}
	acumulador = acumulador + numero;
	
	contador ++;
}


document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador / contador;

}//FIN DE LA FUNCIÓN