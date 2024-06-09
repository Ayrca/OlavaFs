let cadena: String = /*'Juan Perez'*/`Juan Perez`;

let inicialNombre: string = cadena[0];
let inicialApellido: string = cadena[5];

console.log("Posicion 0" + inicialNombre);
console.log("Posicion 5" + inicialApellido);

//length

//let arreglo: string []= ["a","b","c"];
//console.log(arreglo.lenght);

let texto: string = "tengo que hacer muchos ejercicios";
console.log(texto.indexOf("hacer"));
console.log(texto.indexOf("hacer", 20));

//lastindexOf(textoBuscado)

let texto2: string = "tengo que hacer y hacer y hacer muchos ejercicios"
console.log(texto2.lastIndexOf('hacer'))

//substring (inicio,final)
console.log(texto2.substring(10, 15));

//substr(inicio,largo)
console.log(texto2.substr(10, 15));

//toLowerCase & toUpperCase

let textoCombinado: string = "AaaaAAAaa";
console.log(textoCombinado.toLowerCase());//todo a minuscula
console.log(textoCombinado.toUpperCase());//todo a minuscula

//toString()
let numero: number = 234;

console.log(numero.toString());

let numeroString: string = 'A+3CD5';

console.log(parseInt(numeroString));
console.log(typeof parseInt(numeroString));
console.log(typeof numeroString);


let numDecimalString: string = "3.20";
console.log(parseFloat(numDecimalString));
let numeroNumber: number = parseInt(numeroString);

//split(s)
let arrayDeNumeros: string[] = numeroString.split("");

console.log(arrayDeNumeros);
console.log(numeroString.split(" "));