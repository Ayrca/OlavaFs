/*import * as readlineSync from "readline-sync";

let numeroingresado: number = parseInt(
    readlineSync.question("Ingrese numero a determinar:")
);
if (isNaN(numeroingresado)) {
    console.log("error");
} else {
    let resto: number = numeroingresado % 2;

    if (numeroingresado == 0) {
        console.log("El numero es cero.");
    } else if (resto == 0) {
        console.log("El numero es par.");
    } else if (resto != 0) {
        console.log("El numero es impar.");
    }
}
*/

import * as rls from "readline-sync";

let numeroIngresado: number = rls.questionInt("Ingrese numero a determinar:");
let resto: number = numeroIngresado % 2;
if (isNaN(numeroIngresado)) {
    console.log("error");
} else
    if (numeroIngresado == 0) {
        console.log("El numero ingresado es 0");
    } else if (resto == 0) {
        console.log("El numero es par");
    } else if (resto != 0) {
        console.log("El numero es impar");
    }
