function mostrar()
{
var respuesta;
var nombre;
var peso;
var temperaturaH;
var cantTempPar = 0;
var nombrePesado;
var temperaturaPesado;
var pesoMaximo;
var pesoMinimo;
var animalesACero = 0;
var promedio;
var pesoTotal = 0;
var contador = 0;
var flag0 = 0;
var flag = 0;
var pesoMaximo0;
var pesoMinimo0;


do{

    nombre = prompt("Ingrese el nombre de su animal: ");
    
    peso = parseInt(prompt("Ingrese el peso de su animal que sea menor a 1000KG y mayor a 1KG: "));

    while(peso < 1 || peso > 1000 || isNaN(peso)){

        peso = parseInt(prompt("Error, Ingrese un peso valido: "));
    }

    temperaturaH = parseInt(prompt("Ingrese la temperatura del habitat que sea menor a 30ºC y mayor a -30ºC: "))
    
    while(temperaturaH < -30 || temperaturaH > 30 || isNaN(temperaturaH)){

        temperaturaH = parseInt(prompt("Error, ingrese una temperatura valida: "));
    }

    if(temperaturaH % 2 == 0){

        cantTempPar ++;
    }

    if(peso < pesoMinimo || peso > pesoMaximo || flag == 0){
 
        if(flag == 0){

            pesoMaximo = peso;
            pesoMinimo = peso;
            flag = 1;
            pesoMaximo = peso;
            nombrePesado = nombre;
            temperaturaPesado = temperaturaH;
        }

        else if(peso <= pesoMinimo){

            pesoMinimo = peso;
        }

        else{

            pesoMaximo = peso;
            nombrePesado = nombre;
            temperaturaPesado = temperaturaH;
        }

    if(temperaturaH < 0){
        
        animalesACero ++;

        if(peso < pesoMinimo0 || peso > pesoMaximo0 || flag0 == 0){

            if(flag0 == 0){

                pesoMaximo0 = peso;

                pesoMinimo0 = peso;

                flag0 = 1;
            }

            else if(peso <= pesoMinimo0){

                pesoMinimo0 = peso;
            }

            else{

                pesoMaximo0 = peso;
            }
        }
    }
    
    pesoTotal = pesoTotal + peso;

    contador ++;

    promedio = pesoTotal / contador;


    }


    respuesta = prompt("¿Quiere igresar los datos de otro animal?");
    
}while(respuesta == "s");


document.write("A) La cantidad de temperaturas pares son: " + cantTempPar + '.' + "<br>");
document.write("B) El nombre del animal mas pesado es " + nombrePesado + " y su temperatura es " + temperaturaPesado + '.' + "<br>");
document.write("C) La cantidad de animales que viven a menos de 0 grados son " + animalesACero + '.' + "<br>");
document.write("D) El peso total de los animales es " + pesoTotal + " y su promedio da " + promedio + '.' + "<br>");
document.write("F) El peso maximo de los animales que estan bajo 0ºC es " + pesoMaximo0 + " y el peso minimo es " + pesoMinimo0 + '.' + "<br>");
}
