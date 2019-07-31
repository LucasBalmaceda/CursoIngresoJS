function mostrar() {//Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.

var numero = 0;
var suma = 0;
var multiplicacion = 1;
var contador = 0;
var respuesta;

do{
    numero = parseInt(prompt("Ingrese un numero"));
	     
		if(numero >= 0){

			suma = suma + numero;
		}

		else{

			multiplicacion = multiplicacion * numero;
        contador ++;
 		}

respuesta = prompt("¿Quiere ingresar otro numero?");   

}while(respuesta == "si");

document.getElementById("suma").value = suma;

if(contador == 0){

     multiplicacion = 0
}

document.getElementById("producto").value = multiplicacion;

















}//FIN DE LA FUNCIÓN