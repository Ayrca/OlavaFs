import { isUtf8 } from 'node:buffer';
import * as fs from 'node:fs';


//let contenido: string = "nuevo contenido";

//let contenido: number = 9;

//let contenido: string = contenido.toString();

const nombres: string[] = ["Juan", "Analia", "Nicolas", "Carla"];
let contenido: string = "";

for (let i: number = 0; i < nombres.length; i++) {
    contenido += `${nombres[i]} `
}
//Guardar info en el txt
fs.writeFileSync('./test.txt', contenido);
console.log("Finalizado");

//leer informacion del txt
let datos: string = fs.readFileSync('./test.txt', 'utf8');

const datos2: string = datos.trim();//saca los espacios de adelante y de atras de la cadena de caracteres
const nuevoArray: string[] = datos2.split(" ");

console.log(nuevoArray);