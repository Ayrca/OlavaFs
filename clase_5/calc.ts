import * as rls from 'readline-sync'

export let numero1: number = rls.questionInt("Ingrese el numero 1:");
export let numero2: number = rls.questionInt("Ingrese el numero 2:");
export let opcionMenu: number = rls.questionInt("Ingrese 1 para sumar o 2 para restar:");
let resultadoFuncion: number = 0;

function calcularResultado(numero1: number, numero2: number, opcionMenu: number): number {
    let resultado: number = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    } else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;

}
resultadoFuncion = calcularResultado(numero1, numero2, opcionMenu)
dibujarGuiones(30);
console.log("El resultado es:", resultadoFuncion);
dibujarGuiones(30);
function dibujarGuiones(nroguiones: number) {
    let i: number;
    let linea: string = "";
    for (i = 0; i <= nroguiones; i++) {
        linea = linea + "-";
    };
    console.log(linea);
}
