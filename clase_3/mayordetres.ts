import * as readlineSync from "readline-sync";

let Numero1: number = readlineSync.questionInt("Ingrese Numero1:");
let Numero2: number = readlineSync.questionInt("Ingrese Numero2:");
let Numero3: number = readlineSync.questionInt("Ingrese Numero3:");


if (Numero1 > Numero2 && Numero1 > Numero3) {

    console.log("El numero 1 es el mayor")
}
else if (Numero2 > Numero3) {
    console.log("El numero 2 es el mayor")
}
else
    console.log("El numero 3 es el mayor")


