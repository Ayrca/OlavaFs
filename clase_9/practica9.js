"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var palabra = rls.question("Ingrese la palabra que desea invertir:");
var cantidadLetras = palabra.length;
var arregloLetras = palabra.split("");
mostrarVector(arregloLetras, cantidadLetras);
invertirVector(arregloLetras, cantidadLetras);
console.log("mostrando vector");
mostrarVector(arregloLetras, cantidadLetras);
function invertirVector(arregloLetras, cantidadLetras) {
    var indiceIzq = 0;
    var indiceDer = cantidadLetras - 1;
    var aux;
    while (indiceIzq < indiceDer) {
        aux = arregloLetras[indiceIzq];
        arregloLetras[indiceIzq] = arregloLetras[indiceDer];
        arregloLetras[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
    return arregloLetras;
}
function mostrarVector(arregloLetras, cantidadLetras) {
    var indice;
    for (indice = 0; indice < cantidadLetras; indice++) {
        console.log(arregloLetras[indice], " ");
    }
}
function mostrarVectorInvertido(arregloLetras, cantidadLetras) {
    var indice;
    for (indice = cantidadLetras - 1; indice >= 0; indice--) {
        console.log(arregloLetras[indice], " ");
    }
    return arregloLetras;
}
