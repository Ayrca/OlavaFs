"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
    var readlineSync = require("readline-sync");
    var precioproductoo = readlineSync.question("Ingrese precio producto: ");
    var preciodescuento = (precioproductoo * 0.1);
    var preciofinal = (precioproductoo - preciodescuento);

    console.log("el precio de producto con descuento es", preciofinal );
