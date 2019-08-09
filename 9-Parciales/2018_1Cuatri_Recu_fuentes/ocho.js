function mostrar()
{
var letra;
var numero;
var respuesta;
var numeroPar = 0;
var numeroImpar = 0;
var numeroCero = 0;
var promedioPositivos;
var totalPositivo = 0;
var contador = 0;
var totalNegativo = 0;
var flag = 0;
var numeroMaximo;
var numeroMinimo;
var letraMaxima;
var letraMinima;


do{

    letra = prompt("Ingrese una letra: ");

    while(!(isNaN(letra))){

        letra = prompt("Ingrese una letra: ");
    }

    numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));

    while(numero < -100 || numero > 100 || isNaN(numero)){

        numero = parseInt(prompt("Ingrese un numero valido entre -100 y 100: "));
    }

    if(numero % 2 == 0){

        numeroPar ++;
    }

    else{

        numeroImpar ++;
    }

    if(numero == 0){

        numeroCero ++;
    }

    else if(numero > 0){

        totalPositivo = totalPositivo + numero;

        contador ++;
        
        promedioPositivos = totalPositivo / contador;
    }

    else{

        totalNegativo = totalNegativo + numero;
    }
    
    if(contador == 0){

        promedioPositivos = 0;
    }
        
    if(flag == 0){

        numeroMaximo = numero;

        letraMaxima = letra;

        numeroMinimo = numero;

        letraMinima = letra;

        flag = 1;
    }

    else if(numero < numeroMinimo){

        numeroMinimo = numero;

        letraMinima = letra;
    }

    else{

        numeroMaximo = numero;

        letraMaxima = letra;
    }

    
    respuesta = prompt("¿Quiere ingresar otra letra y numero?");

}while(respuesta == 's');

document.write("A) La cantidad de números pares son :" + numeroPar + '.' + "<br>");
document.write("B) La cantidad de números impares son : " + numeroImpar + '.' + "<br>");
document.write("C) La cantidad de ceros son: " + numeroCero + '.' + "<br>");
document.write("D) La suma total de positivos es " + totalPositivo + ", la cantidad de numeros positivos ingresados es " + contador + " y el promedio es " + promedioPositivos + '.' + "<br>");
document.write("E) La suma de todos los números negativos es " + totalNegativo + '.' + "<br>");
document.write("F) El número maximo es " + numeroMaximo + " y su letra es " + letraMaxima + ", y el numero minimo es " + numeroMinimo + " y su letra es " + letraMinima + '.' + "<br>");

}
