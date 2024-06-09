"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var usuario = 'Juan';
var clave = 'claveJuan';
var usuarioIngresado = rls.question("Ingrese usuario:");
var claveIngresada = rls.question("Ingrese clave:");
if (usuarioIngresado == usuario && claveIngresada == clave) {
    console.log("Acceso confirmado");
}
else
    (console.log("Usuario o clave incorrectos"));
