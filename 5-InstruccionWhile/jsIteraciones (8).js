function mostrar() {//Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.

var num;
var suma = 0;
var multiplicacion = 1;
var respuesta;
var flag = 0;

do{

	num = parseInt(prompt("Ingrese un numero: "));

	while(isNaN(num)){

		num = parseInt(prompt("Ese no es un numero valido, ingrese otro numero: "));
	}

	if(num >= 0){

		suma = suma + num;
	}
	else{

		multiplicacion = multiplicacion * num;

		flag ++;
	}

	respuesta = prompt("¿Quiere ingresar otro numero?");

}while(respuesta == 's');

document.getElementById("suma").value = suma;

if(flag == 0){

	multiplicacion = 0;
}
document.getElementById("producto").value = multiplicacion;

}//FIN DE LA FUNCIÓN