"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* Ordenamiento Burbujeo
*/
var arr = [3, 2, 1, 5, 9, 10, 7];
arr = burbujeoAscendente(arr);
function burbujeoAscendente(arreglo) {
    var numeroActual = 0;
    var numeroSiguiente = 0;
    console.log("----Como ordena el arreglo burbujeo----");
    for (var i = 0; i < arreglo.length; i++) {
        console.log("---------------------------------------");
        console.log("i en este momento es  = ".concat(i));
        console.log("---------------------------------------");
        for (var j = 0; j < arreglo.length - 1; j++) {
            numeroActual = arreglo[j];
            numeroSiguiente = arreglo[j + 1];
            console.log("j en este momento es = ".concat(j));
            /*
            *Si el numero que esta en la posicion actual donde estoy parado
            * es mayor al numero que esta en la posicion siguiente */
            if (numeroActual > numeroSiguiente) {
                //* Muevo el numero siguiente a la posicion donde esta el numero actual
                arreglo[j] = numeroSiguiente;
                //* Despus muevo el numero actual a la posicion donde estaba el numero siguiente
                arreglo[j + 1] = numeroActual;
            }
            console.log("Arreglo luego de pasar por i = [" + i + "] y j = [" + j + "]: " + arreglo);
        }
    }
    console.log("Arreglo ordenado: " + arreglo);
    return arreglo;
}
function showArray(array) { console.log("[".concat(array.join('-'), "]")); }
