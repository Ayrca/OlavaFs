import *  as rls from 'readline-sync'

let palabra: string = rls.question("Ingrese la palabra que desea invertir:");

let cantidadLetras: number = palabra.length;
let arregloLetras: string[] = palabra.split("");

mostrarVector(arregloLetras, cantidadLetras);
invertirVector(arregloLetras, cantidadLetras);
console.log("mostrando vector");
mostrarVector(arregloLetras, cantidadLetras);

function invertirVector(arregloLetras: string[], cantidadLetras: number) {
    let indiceIzq: number = 0;
    let indiceDer: number = cantidadLetras - 1;
    let aux: string;
    while (indiceIzq < indiceDer) {
        aux = arregloLetras[indiceIzq];
        arregloLetras[indiceIzq] = arregloLetras[indiceDer];
        arregloLetras[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
    return arregloLetras;
}

function mostrarVector(arregloLetras: string[], cantidadLetras: number) {
    let indice: number;
    for (indice = 0; indice < cantidadLetras; indice++) {
        console.log(arregloLetras[indice], " ");
    }
}
function mostrarVectorInvertido(arregloLetras: string[], cantidadLetras: number) {
    let indice: number;
    for (indice = cantidadLetras - 1; indice >= 0; indice--) {
        console.log(arregloLetras[indice], " ");
    }
    return arregloLetras
}