function mostrar()
{
//tomo la edad  

var estado;

var edad;
    
    edad = parseInt(document.getElementById("edad").value);

    estado = document.getElementById("estadoCivil").value;

if(edad <18){

    if(estado != "Soltero")
        alert("Es demasiado pequeño para no ser soltero");
}
}//FIN DE LA FUNCIÓN