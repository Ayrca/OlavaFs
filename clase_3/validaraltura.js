"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var alturaLimite = 1.30;
var alturaUsuario = rls.questionInt("Ingrese altura del usuario:");
if (alturaUsuario >= alturaLimite) {
    console.log("El usuario puede entrar al parque");
}
else {
    console.log("el usuario no puede entrar");
}
;
