"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese base:");
var exponente = rls.questionInt("Ingrese exponente:");
var i;
var potencia;
function calcular(exponente, base) {
    if (exponente >= 0) {
        if (exponente === 0) {
            return 1;
        }
        ;
        return calcularPotencia(base, exponente);
    }
}
;
function calcularPotencia(base, exponente) {
    var resultado = 1;
    for (i = 0; i <= exponente; i++) {
        resultado = resultado * base;
    }
    return resultado;
}
console.log(calcular(exponente, base));
/*if (exponente = 0) {
    console.log("El resultado es 1");
}
else {
    for (i = 0; i <= exponente; i++) {
        multiplicacion
    }
    let valor: number = multiplicacion(base, exponente);
    console.log(valor)
}*/
