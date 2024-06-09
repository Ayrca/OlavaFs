"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese basee:");
var altura = rls.questionInt("Ingrese alturaa:");
var area = base * altura;
console.log("base:", base + "\n"
    + "altura:", altura + "\n" + "area:", area);
