import * as readlineSync from "readline-sync";

const clave: string = 'eureka';
let intentos: number = 3;
let contador: number = 1;
let claveUsuario: string = readlineSync.question("Ingrese clave:");

while (contador < intentos && claveUsuario != clave) {
    readlineSync.question("Clave erronea, ingrese nuevamente la clave:");
    contador++;

}
if (claveUsuario != clave) {
    readlineSync.question("intentos agotados, espere 30 mins ");
}
else {
    (console.log("Correcto"));
}

