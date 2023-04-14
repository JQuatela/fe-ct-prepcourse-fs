var ListaDeCompras = []
ListaDeCompras[1] = "Lechuga";
ListaDeCompras[2] = "Tomate";
ListaDeCompras[0] = "papa"
console.log(ListaDeCompras.length);

var Elemento = ListaDeCompras[1]
console.log(Elemento);

var colores = ["rojo", "amarillo"];
colores.push("verde");
colores.unshift("azul");
colores.shift()
colores.pop()

console.log(colores);

var coloresincluidos = ["rojo", "amarillo", "verde"]
var incluye = colores.includes("naranja")

console.log(incluye);


var numeros = [1, 5, 7, 9];
var cumple = numeros.every((num) => { return num > 5 })
console.log(cumple);


var palabra = "henri"
var palabraSeparada = palabra.split("")
console.log(palabraSeparada)
palabraSeparada.pop()
palabraSeparada.push("Y")
console.log(palabraSeparada);

var PalabraArreglada = palabraSeparada.join("")
console.log(PalabraArreglada)


var numeros  = [1, 2, 3, 4]
numeros.forEach( (num) => console.log(num));

var MasUno = numeros.map( (num) => {return num +1});
console.log(MasUno)  
