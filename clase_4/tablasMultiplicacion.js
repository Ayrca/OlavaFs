"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nro = rls.questionInt("Ingrese numero del que desea visualizar tablas:");
var nroTablas = rls.questionInt("Ingrese hasta que tabla desea visualizar:");
var i;
var tot;
for (i = 1, i <= nroTablas; i++;) {
    var total = void 0;
    while (i <= nroTablas) {
        total = nro * i;
        tot = total;
        console.log(nro, "x", i, "=", tot);
    }
}
