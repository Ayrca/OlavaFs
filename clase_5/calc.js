"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcionMenu = exports.numero2 = exports.numero1 = void 0;
var rls = require("readline-sync");
exports.numero1 = rls.questionInt("Ingrese el numero 1:");
exports.numero2 = rls.questionInt("Ingrese el numero 2:");
exports.opcionMenu = rls.questionInt("Ingrese 1 para sumar o 2 para restar:");
var resultadoFuncion = 0;
function calcularResultado(numero1, numero2, opcionMenu) {
    var resultado = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    }
    else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}
resultadoFuncion = calcularResultado(exports.numero1, exports.numero2, exports.opcionMenu);
dibujarGuiones(30);
console.log("El resultado es:", resultadoFuncion);
dibujarGuiones(30);
function dibujarGuiones(nroguiones) {
    var i;
    var linea = "";
    for (i = 0; i <= nroguiones; i++) {
        linea = linea + "-";
    }
    ;
    console.log(linea);
}
