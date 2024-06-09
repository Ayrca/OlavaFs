"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina",
    "Queso"];
var filepathProductos = "./productos.txt";
var filepathPrecios = "./precios.txt";
writeTxt(productos, filepathProductos);
writeTxt(precios, filepathPrecios);
readTxt(filepathProductos);
readTxt(filepathPrecios);
function writeTxt(arreglo, filepath) {
    var contenido = crearString(arreglo);
    fs.writeFileSync(filepath, contenido);
}
function crearString(arreglo) {
    var contenido = "";
    for (var i = 0; i < arreglo.length; i++) {
        contenido += "".concat(arreglo[i], " ");
        /*let contenido = arreglo.join(" ");*/
    }
    return contenido;
}
function acomodarStr(cadena) {
    var datos2 = cadena.trim(); //saca los espacios de adelante y de atras de la cadena de caracteres
    var nuevoArray = datos2.split(" ");
    console.log(nuevoArray);
}
function readTxt(filepath) {
    var datos = fs.readFileSync(filepath, 'utf8');
    acomodarStr(datos);
}
