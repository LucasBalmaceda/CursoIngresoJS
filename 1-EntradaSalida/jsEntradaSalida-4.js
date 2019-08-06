/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
var mensaje = prompt("Ingrese su mensaje: ");

document.getElementById("elNombre").value = mensaje;

/* creamos una variable para citar el prompt, el cual va a ser igual a la barra para que el mensaje que 
escribamos en el prompt, salga en la barra. */


}

