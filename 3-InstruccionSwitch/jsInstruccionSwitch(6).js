function mostrar()
{
//tomo la edad  
var hora = parseInt(document.getElementById("hora").value);

while(isNaN(hora)){

    hora = parseInt(prompt("Esa hora no es valida, ingrese otra hora: "))
}

    if(hora > 24 || hora < 0){

        alert("Esa no es una hora valida")
    }

    else if((hora >= 0 && hora < 7) || (hora >= 20 && hora <= 24)){

        alert("Es de noche");
    }

    else if(hora >= 7 && hora <12){

        alert("Es de mañana");
    }
    else{

        alert("Es de tarde");
    }



}//FIN DE LA FUNCIÓN