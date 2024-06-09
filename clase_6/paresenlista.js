var numeros1 = [4, 7, 9, 3,
    1, 45, 67, 23, 29, 78,
    11, 16];
var cantidad = 0;
var numerosPares = encontrarNrospares(numeros1);
console.log('La cantidad de numeros pares es: ', cantidad);
function encontrarNrospares(numeros1) {
    for (var i = 0; i < 12; i++) {
        if (numeros1[i] % 2 === 0) {
            cantidad += 1;
        }
    }
    return cantidad;
}
/*function parImpar(numeroMayor: number) {
    let resto: number = numeroMayor % 2;

    if (resto == 0) {
        console.log("El numero es par");
    } else if (resto != 0)
        console.log("El numero es impar");
}
*/
