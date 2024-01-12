//declarando variables
let a, b, c;
a = 5;
b = 6;
c = a + b;


//cuando estan separados por punto y coma, se permiten varias declaraciones en una linea.
let num1, num2, num3;
num1 = 20; num2 = 30; num3 = 40;


//Una buena practica es poner espacios alrededor de los operadores ( = + - / *):

let x, y, z;
y = "Bienvenido ";
z = "a la programacion con JS";
x = y + z;
console.log(x);

//Para una mejor legibilidad, los programadores suelen evitar lineas de codigo de mas de 80 caracteres
let nombre = "jose enrique garcia flores";

document.getElementById("demo").innerHTML = nombre;

//Sintaxis de Javascript

//lo numeros se escriben con o sin decimales
var numero_uno = 10.50;
var numero_dos = 1006;

//las cadenas de texto, se escriben entre comillas dobles o simples
var nombres = "jose enrique";
var apellidos = 'garcia flores';


//Operadores de Javascript (+ - / *) para calcular valores
function suma(num1, num2){
    let resultado = num1 + num2
    return resultado;
}

var resultado = suma(25, 35);
console.log("El resultado de la suma es: " + resultado);


//Javascript distingue entre mayusculas y minusculas
let lastName = "jose enrique";
let lastname = "natalia";

console.log("Nombre: " + lastName);
console.log("Nombre: " + lastname);


//usando constantes (const)
const PI = 3.1416;
const DOLAR = 6.96;
const EURO = 7.5732;

const precio1 = 354.32;
const precio2 = 76.45;
let total = precio1 + precio2;
console.log("El total del precio es: " + total);


//crear una variable en Javascript se llama "declarar" una variable
var carName; //la variable no tiene valor (tecnicamente es undefined)
let car_name; // tiene el valor de undefined

carName = "Volvo";
car_name = "Mustang";
document.getElementById("carro").innerHTML = carName;
document.getElementById("carro1").innerHTML = car_name;


//Una declaracion, muchas variables
let persona = "Jon Snow", familia = "Stark", edad = 35;

//Una declaracion puede abarcar varias lineas
let persons = "rasek",
    age = "27",
    sexo = "masculino";


let soltero;
console.log("El valor: " + soltero);


//Aritmetica en JS
let o, p, q;
o = 1.2;
p = 1;
q = 2;
let w = o + p + q;
console.log(typeof(w));
