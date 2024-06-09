"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioproducto = readlineSync.questionInt("Ingrese precio producto: ");
var preciodescuento = (precioproducto * 0.1);
var preciofinal = precioproducto - preciodescuento;
console.log("Descuento aplicado del 10%, debe pagar:", preciofinal);
