"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var precioProducto = rls.questionInt("Ingrese precio del producto:");
var cantidadProducto = rls.questionInt("Ingrese cantidad de producto:");
var totalCompra = precioProducto * cantidadProducto;
if (totalCompra >= 1000) {
    totalCompra = totalCompra * 0.9, console.log("Se aplico un descuento del 10%, Total:", totalCompra);
}
else {
    console.log("Total:", totalCompra);
}
