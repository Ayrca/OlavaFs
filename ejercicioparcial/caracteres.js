var arreglo = new Array(15);
cargarCaracteres(arreglo);
mostrarCaracteres(arreglo);
var cantidades = contarCaracteres(arreglo);
console.log(cantidades);
function cargarCaracteres(arreglo) {
    var i = 0;
    for (i; i < arreglo.length; i++) {
        arreglo[i] = caracteresAleatorio();
    }
}
function caracteresAleatorio() {
    var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var letrasADevolver;
    letrasADevolver = letras[Math.floor(Math.random() * (letras.length - 1))];
    return letrasADevolver;
}
function mostrarCaracteres(arreglo) {
    var i = 0;
    var numeros = "";
    for (i; i < arreglo.length; i++) {
        numeros += arreglo[i] + " - ";
    }
    console.log("El arreglo es: ", numeros);
}
function contarCaracteres(arreglo) {
    var i = 0;
    var sumaA = 0;
    var sumaE = 0;
    var sumaO = 0;
    for (i; i < arreglo.length; i++) {
        if (arreglo[i] === 'A') {
            sumaA += 1;
        }
        else if (arreglo[i] === 'E') {
            sumaE += 1;
        }
        else if (arreglo[i] === 'O') {
            sumaO += 1;
        }
    }
    var cantidades = [sumaA, sumaE, sumaO];
    return cantidades;
}
