function mostrar()
{
//tomo la edad  
var mes = document.getElementById("mes").value;

switch(mes){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
       alert("Falta para el invierno.");
break;

    case"Julio":
    case"Agosto":
       alert("Falta para el invierno.");
break;

    case"Septiembre":
    case"Octubre":
    case"Noviembre":
    case"Diciembre":
       alert("Ya pasamos el frio, ahora calor!!!.");
break;
}




}//FIN DE LA FUNCIÓN