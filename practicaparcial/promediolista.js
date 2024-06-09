"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var lista = new Array(5);
var indice;
var promedio = 0;
//Cargo el vector v1
for (indice = 0; indice < 5; indice++) {
    lista[indice] = rls.questionInt("Ingrese el valor la posicion ".concat(indice, ": "));
}
for (indice = 0; indice < 5; indice++) {
    promedio += lista[indice];
}
promedio = promedio / 5;
console.log(promedio);
//function cargarlista();
