import * as rls from 'readline-sync'

let alturaLimite: number = 1.30;
let alturaUsuario: number = rls.questionInt("Ingrese altura del usuario:");

if (alturaUsuario >= alturaLimite) { console.log("El usuario puede entrar al parque") }
else {
    console.log("el usuario no puede entrar")

};