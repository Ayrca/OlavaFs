import * as rls from 'readline-sync'

let v1: number = rls.questionInt("ingrese tiempo primer vuelta:");
let v2: number = rls.questionInt("ingrese tiempo segunda vuelta:");
let v3: number = rls.questionInt("ingrese tiempo tercer vuelta:");
let v4: number = rls.questionInt("ingrese tiempo cuarta vuelta:");

let tiempototal: number = v1 + v2 + v3 + v4;

let promedio: number = ((v1 + v2 + v3 + v4) / 4);

console.log("Tiempo total de carrera:", tiempototal + "\n" + "Promedio por vuelta:", promedio);

