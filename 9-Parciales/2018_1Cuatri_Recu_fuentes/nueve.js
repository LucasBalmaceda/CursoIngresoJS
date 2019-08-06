function mostrar()
{
var nombre;
var peso;
var temperatura;
var respuesta;
var temperaturasPares = 0;

do{

    nombre = prompt("Ingrese el nombre del animal");

    peso = parseInt(prompt("Ingrese el peso del animal que esté entre 1KG y 1000KG"));

        while(peso < 1 || peso > 1000){

            peso = parseInt(prompt("ERROR, Ingrese un peso valido entre 1KG y 1000KG"));
        }

    temperatura = parseInt(prompt("Ingrese la temperatura del habitat"));

        while(!(temperatura >= -30 && temperatura <= 30)){

            temperatura = parseInt(prompt("Ingrese una temperatura que este en el rango de -30ºC y 30ºC "));
        }

    if(temperatura / 2 == 0){

        
    }
    
    respuesta = prompt("¿Quiere ingresar otro numero?");
}while(respuesta == 's');
}
