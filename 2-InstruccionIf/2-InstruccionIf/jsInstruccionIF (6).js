function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;

if(edad >= 18){
    alert("Es adulto");
}
else if (edad >= 13){//recortamos el limite porque se eliminan los numeros del 18 en adelante por descartar que es adulto
    alert("Es adolescente");
}
else
    alert("Es niño");



}//FIN DE LA FUNCIÓN