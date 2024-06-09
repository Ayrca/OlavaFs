"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nro1 = rls.questionInt("Ingrese primero numero:");
var nro2 = rls.questionInt("Ingrese segundo numero:");
var i;
var suma = 0;
for (i = nro1 + 1; i < nro2; i++) {
    suma = suma + i;
}
console.log(suma);
