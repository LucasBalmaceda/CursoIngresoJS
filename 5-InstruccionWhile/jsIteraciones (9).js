function mostrar()
{

var maximo = 0;
var minimo = 0;
var numero = 0;
var contador = 0;
var minimo;
var maximo;
var respuesta;

do{
    numero = parseInt(prompt("Ingrese un numero: "));

        while(isNaN(numero)){

            numero = parseInt(prompt("Ingrese un numero valido: "));
        }

    if(contador == 0){
              
        maximo = numero;
        minimo = numero;       
    }

    else{
        
        if(numero > maximo){

            maximo = numero;
        }

        if(numero < minimo){

            minimo = numero;
        }
    }

    contador ++;
    
    respuesta = (prompt("¿Quiere ingresar otro numero?"));

}while(respuesta == 's');

document.getElementById("minimo").value = minimo;  
document.getElementById("maximo").value = maximo;

}//FIN DE LA FUNCIÓN