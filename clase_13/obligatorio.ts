import * as fs from 'node:fs';
const precios: number[] = [525, 3500, 400, 1999]; const productos: string[] = ["Leche", "Galletitas", "Harina",
    "Queso"]
const filepathProductos = "./productos.txt"
const filepathPrecios = "./precios.txt"
writeTxt(productos, filepathProductos);
writeTxt(precios, filepathPrecios);
readTxt(filepathProductos);
readTxt(filepathPrecios);


function writeTxt(arreglo: number[] | string[], filepath: string) {
    let contenido: string = crearString(arreglo);
    fs.writeFileSync(filepath, contenido)
}
function crearString(arreglo: any[]): string {
    let contenido: string = "";
    for (let i: number = 0; i < arreglo.length; i++) {
        contenido += `${arreglo[i]} `;
        /*let contenido = arreglo.join(" ");*/
    }
    return contenido
}
function acomodarStr(cadena: string): any {
    const datos2: string = cadena.trim();//saca los espacios de adelante y de atras de la cadena de caracteres
    const nuevoArray: string[] = datos2.split(" ");
    console.log(nuevoArray);
}
function readTxt(filepath: string): any {
    let datos: string = fs.readFileSync(filepath, 'utf8');
    acomodarStr(datos);
}
