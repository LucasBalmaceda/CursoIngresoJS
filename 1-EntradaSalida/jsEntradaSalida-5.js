/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre = document.getElementById("elNombre").value;
    var edad = parseInt(document.getElementById("laEdad").value);
       
    while(isNaN(edad)){
        
        edad = parseInt(prompt("Esa no es una edad válida, ingrese otra: "));
    }

    document.getElementById("laEdad").value = edad;

    alert("Usted se llama " + nombre + " y tiene " + edad + " años.");

}

