"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var clave = 'eureka';
var intentos = 3;
var contador = 0;
var claveUsuario = readlineSync.question("Ingrese clave:");
while (contador <= intentos() && claveUsuario != clave) {
    console.log("Clave erronea, ingrese nuevamente la clave");
    contador++;
}
if {(claveUsuario != clave) {
    console.log("Maximo de intentos alcanzados");
   else ("Correcto"); }
}
