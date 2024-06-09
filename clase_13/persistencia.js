"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
//let contenido: string = "nuevo contenido";
//let contenido: number = 9;
//let contenido: string = contenido.toString();
var nombres = ["Juan", "Analia", "Nicolas", "Carla"];
var contenido = "";
for (var i = 0; i < nombres.length; i++) {
    contenido += "".concat(nombres[i], " ");
}
//Guardar info en el txt
fs.writeFileSync('./test.txt', contenido);
console.log("Finalizado");
//leer informacion del txt
var datos = fs.readFileSync('./test.txt', 'utf8');
var datos2 = datos.trim(); //saca los espacios de adelante y de atras de la cadena de caracteres
var nuevoArray = datos2.split(" ");
console.log(nuevoArray);
