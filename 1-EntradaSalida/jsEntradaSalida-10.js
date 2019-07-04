/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo
    var descuento
    var resultado 
    
    sueldo = document.getElementById("importe").value;
    sueldo = parseFloat(sueldo);
    
    descuento = sueldo * .25;
    
    resultado = sueldo - descuento;
    document.getElementById("resultado").value = resultado;

    
}
