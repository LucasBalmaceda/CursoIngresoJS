function mostrar()
{
var nombre;
var peso;
var temperatura;
var respuesta;
var temperaturasPares = 0;
var nombrePesado;
var pesoPesado;
var temperaturaPesado;
//El nombre y temperatura del animal más pesado 
var flag = 0;
var flag1 = 0;
var animalesACero = 0;
var promedio;
var pesoTotal;
var contador = 0;
var max;
var min;


do{

    nombre = prompt("Ingrese el nombre del animal");

    peso = parseInt(prompt("Ingrese el peso del animal que esté entre 1KG y 1000KG"));

        while(peso < 1 || peso > 1000 || isNaN(peso)){

            peso = parseInt(prompt("ERROR, Ingrese un peso valido entre 1KG y 1000KG"));
        }

    temperatura = parseInt(prompt("Ingrese la temperatura del habitat"));

        while(!(temperatura >= -30 && temperatura <= 30) || isNaN(temperaturas)){

            temperatura = parseInt(prompt("Ingrese una temperatura que este en el rango de -30ºC y 30ºC "));
        }

    if(temperatura %2 == 0){

        temperaturasPares ++;
    }

    if(peso > pesoPesado || flag == 0){

        pesoPesado = peso;

        nombrePesado = nombre;

        temperaturaPesado = temperatura;

        flag = 1;
    }

    if(temperatura < 0){

        if(temperatura < min || temperatura > max || flag1 == 0){

            if(flag == 0)
            
            if(temperatura < min){

                min = temperatura;
            }

            else{

                max = temperatura;
            }

            flag1 = 1;
        }

        animalesACero ++;
    }

    pesoTotal = pesoTotal + peso;

    contador ++;

    promedio = pesoTotal / contador;

    respuesta = prompt("¿Quiere ingresar otro numero?");
}while(respuesta == 's');
}
