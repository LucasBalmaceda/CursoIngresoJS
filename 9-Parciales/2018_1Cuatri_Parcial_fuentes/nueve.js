function mostrar()/*Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )*/ 
{
var marca;
var peso;
var temperatura;
var respuesta;
var promedioP;
var productoP;
var min = 0;
var max = 0;
var cantidad0 = 0;
var temperaturasP = 0;
var flag = 0;
var flag0 = 0;
var contador = 0;
var sumaProductos = 0;

do{
marca = prompt("Ingrese marca: ");

peso = parseInt(prompt("Ingrese el peso de su producto que sea entre 1KG y 100KG"));
    
    while(peso >= 100 || peso <= 1 || isNaN(peso)){

        peso = parseInt(prompt("Ingrese un peso que cumpla con los parametros entre 1Kg y 100KG"));
    }

temperatura = parseInt(prompt("Ingrese la temperatura de su producto"));

    while(temperatura > 30 || temperatura < -30 || isNaN(temperatura)){

        temperatura = parseInt(prompt("Ingrese una temperatura que esté entre -30ºC y 30ºC"))
    }

if(temperatura %2 == 0){

    temperaturasP ++;
}

if(flag == 0){

    min = peso;

    max = peso;

    flag = 1;
}

else{

    if(peso < min){

        min = peso;
    }

    else if(peso > max){

        max = peso;
    }
}

if(flag0 == 0){
 
    productoP = peso;

    flag0 = 1;
}  

else if(productoP < peso){

    productoP = peso;

    marcaP = marca;
}

if(temperatura <= 0){

    cantidad0 ++;
}

sumaProductos = sumaProductos + peso;

contador ++;

promedioP = sumaProductos / contador;


respuesta = prompt("¿Quiere ingresar otro producto?");

}while(respuesta == "si");

document.write("La cantidad de temperaturas pares son: " + temperaturasP + '.' + "<br>");
document.write("La marca del producto mas pesado es : " + marcaP + '.' + "<br>" );
document.write("La cantidad de productos con grados bajo 0 son: " + cantidad0 + '.' + "<br>");
document.write("El peso total es " + sumaProductos + " y el promedio es: " + promedioP + '.' + "<br>");
document.write("El peso maximo es " + max + " y el peso minimo es "+ min + '.' + "<br>");



}