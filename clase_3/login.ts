import * as rls from 'readline-sync'

const usuario: string = 'Juan';
const clave: string = 'claveJuan';

let usuarioIngresado: string = rls.question("Ingrese usuario:");
let claveIngresada: string = rls.question("Ingrese clave:");

if (usuarioIngresado == usuario && claveIngresada == clave) {
    console.log("Acceso confirmado")
}
else (console.log("Usuario o clave incorrectos"))
