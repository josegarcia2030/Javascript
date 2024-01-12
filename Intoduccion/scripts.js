console.log("Esta pagina funciona con Javascript");

//cambiamos el contenido del HTML
document.getElementById("titulo").innerHTML = "Bienvenido a Javascript"

//cambiamos el estilos HTML (CSS)
document.getElementById("parrafo").style.color = "tomato";
document.getElementById("parrafo").style.fontFamily = "sans-serif"; 

//con JS se puede ocultar elementos
function ocultar(){
    document.getElementById("caja").style.display = "none";
}

//con JS se puede mostrar elementos ocultos
function mostrar(){
    document.getElementById("caja").style.display = "block";
}

//Visualizaciones de Javascript
/*
    - Escribir en un elemento HTML, usando innerHTML
    - Escribir en la salida HTML usando document.write()
    - Escribiendo en un cuadro de alerta, usando window.alert()
    - Escribiendo en la consola del navegador, usando console.log()
*/


//Usando HTML interno
document.getElementById("demo").innerHTML = "Texto insertado desde Javascript";


//Para fines de depuracion utilizamos el Console.log()
//metodo en el navegador para mostrar datos

var num1 = 10;
var num2 = 30;
var res = num1 + num2;
console.log("El resultado es: " + res);