var numeros = [4, 7, 9, 3,
    1, 45, 67, 23, 29, 78,
    11, 16];
var numeroMayor = encontrarNroMayor(numeros);
console.log('El número más grande en el array es: ', numeroMayor);
parImpar(numeroMayor);
function encontrarNroMayor(numeros) {
    var maximo = numeros[0];
    for (var i = 1; i < 12; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}
function parImpar(numeroMayor) {
    var resto = numeroMayor % 2;
    if (resto == 0) {
        console.log("El numero es par");
    }
    else if (resto != 0)
        console.log("El numero es impar");
}
