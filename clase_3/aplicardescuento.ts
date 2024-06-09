import * as readlineSync from 'readline-sync';


let precioproducto = readlineSync.questionInt("Ingrese precio producto: ");
let preciodescuento: number = (precioproducto * 0.1);
let preciofinal: number = precioproducto - preciodescuento;

console.log("Descuento aplicado del 10%, debe pagar:", preciofinal);

