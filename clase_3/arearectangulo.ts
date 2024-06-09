import * as rls from "readline-sync";

let base: number = rls.questionInt("Ingrese basee:");
let altura: number = rls.questionInt("Ingrese alturaa:");
let area: number = base * altura;

console.log("base:", base + "\n"
    + "altura:", altura + "\n" + "area:", area); 