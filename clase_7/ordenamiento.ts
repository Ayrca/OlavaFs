import * as rls from "readline-sync";

let longArray: number = rls.questionInt("Ingrese dimension N del arreglo:");

let arreglo: number[] = new Array(longArray);

cargarNumeros(arreglo);
console.table(arreglo);
mostrarNumeros(arreglo);
let arregloDesc = burbujeoDescendente(arreglo);
mostrarNumeros(arregloDesc);
function burbujeoDescendente(arreglo: number[]): number[] {
    let numeroActual = 0;
    let numeroSiguiente = 0;
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length - 1; j++) {
            numeroActual = arreglo[j];
            numeroSiguiente = arreglo[j + 1];
            if (numeroActual < numeroSiguiente) {
                arreglo[j] = numeroSiguiente;
                arreglo[j + 1] = numeroActual;
            }
        }
    }
    console.log("- - -Burbujeo descendente aplicado - - -")
    return arreglo;

}
function cargarNumeros(arreglo: number[]) {
    let i: number = 0;
    for (i; i < arreglo.length; i++) {
        arreglo[i] = Aleatorio(0, 10);
    }
}
function mostrarNumeros(arreglo: number[]) {
    let i: number = 0;
    let numeros: string = "";
    for (i; i < arreglo.length; i++) {
        numeros += arreglo[i] + " - ";
    }
    console.log("El arreglo es: ", numeros);
}
function Aleatorio(menorValor: number, mayorValor: number): number {
    let numeroADevolver: number = 0;
    numeroADevolver = Math.floor(
        Math.random() * (mayorValor - menorValor + 1) + menorValor
    );
    return numeroADevolver;
}
/*function burbuja(arreglo: number[], cantidad: number) {
    for (let i: number = 0; i < cantidad; i++) {
        for (let j: number = 0; j < cantidad - 1; j++) {
            if (comparar(arreglo, j, j + 1) == 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    } 
}
//En este arreglo vamos a poder cambiar las posiciones "i" y "j"
function intercambiar(arreglo: number[], i: number, j: number) {
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}
//Compara los valores de las posiciones "i" y "j" del arreglo que pasamos por parametro
function comparar(arreglo: number[], i: number, j: number): number {
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}
*/
