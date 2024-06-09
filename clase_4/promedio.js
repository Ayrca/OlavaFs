"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
/*
let nota1 : number = rls.questionInt("Ingrese la nota 1: ");
let nota2 : number = rls.questionInt("Ingrese la nota 2: ");
let nota3 : number = rls.questionInt("Ingrese la nota 3: ");
let nota4 : number = rls.questionInt("Ingrese la nota 4: ");
let nota5 : number = rls.questionInt("Ingrese la nota 5: ");
let nota6 : number = rls.questionInt("Ingrese la nota 6: ");
let nota7 : number = rls.questionInt("Ingrese la nota 7: ");
let nota8 : number = rls.questionInt("Ingrese la nota 8: ");
let nota9 : number = rls.questionInt("Ingrese la nota 9: ");
let nota10 : number = rls.questionInt("Ingrese la nota 10: ");
let total : number = nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10;
let promedio : number = total/10;
console.log("El promedio de las notas es: " + promedio);*/
/*let nota, suma, promedio, contador: number;
contador = 1;
suma = 0;
while (contador <= 10) {
    nota = rls.questionInt("Ingrese nota:");
    suma = suma + nota;
    contador = contador + 1
}
promedio = suma / 10
console.log("el promedio es", promedio)*/
var nota, suma, promedio, contador;
suma = 0;
for (contador = 1; contador < 11; contador++) {
    nota = rls.questionInt("Ingrese la nota " + contador + ": ");
    suma += nota;
}
promedio = suma / 10;
console.log("el promedio es" + promedio);
