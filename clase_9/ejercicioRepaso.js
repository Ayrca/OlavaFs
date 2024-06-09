var cadena = /*'Juan Perez'*/ "Juan Perez";
var inicialNombre = cadena[0];
var inicialApellido = cadena[5];
console.log("Posicion 0" + inicialNombre);
console.log("Posicion 5" + inicialApellido);
//length
//let arreglo: string []= ["a","b","c"];
//console.log(arreglo.lenght);
var texto = "tengo que hacer muchos ejercicios";
console.log(texto.indexOf("hacer"));
console.log(texto.indexOf("hacer", 20));
//lastindexOf(textoBuscado)
var texto2 = "tengo que hacer y hacer y hacer muchos ejercicios";
console.log(texto2.lastIndexOf('hacer'));
//substring (inicio,final)
console.log(texto2.substring(10, 15));
//substr(inicio,largo)
console.log(texto2.substr(10, 15));
//toLowerCase & toUpperCase
var textoCombinado = "AaaaAAAaa";
console.log(textoCombinado.toLowerCase()); //todo a minuscula
console.log(textoCombinado.toUpperCase()); //todo a minuscula
//toString()
var numero = 234;
console.log(numero.toString());
var numeroString = 'A+3CD5';
console.log(parseInt(numeroString));
console.log(typeof parseInt(numeroString));
console.log(typeof numeroString);
var numDecimalString = "3.20";
console.log(parseFloat(numDecimalString));
var numeroNumber = parseInt(numeroString);
//split(s)
var arrayDeNumeros = numeroString.split("");
console.log(arrayDeNumeros);
console.log(numeroString.split(" "));
