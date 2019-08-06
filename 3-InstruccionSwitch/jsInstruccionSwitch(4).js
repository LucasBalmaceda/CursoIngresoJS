function mostrar()
{
//tomo la edad  
var mes = document.getElementById("mes").value;

switch(mes){

    case "Febrero":

        alert("Este mes tiene 29 dias");

            break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        
        alert("Este mes tiene 30 dias");
        
            break;

    default:

        alert("Este mes tiene 31 dias");
}

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN