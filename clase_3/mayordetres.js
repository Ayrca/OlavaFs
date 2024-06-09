"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Numero1 = readlineSync.questionInt("Ingrese Numero1:");
var Numero2 = readlineSync.questionInt("Ingrese Numero2:");
var Numero3 = readlineSync.questionInt("Ingrese Numero3:");
if (Numero1 > Numero2 && Numero1 > Numero3) {
    console.log("El numero 1 es el mayor");
}
else if (Numero2 > Numero3) {
    console.log("El numero 2 es el mayor");
}
else
    console.log("El numero 3 es el mayor");
