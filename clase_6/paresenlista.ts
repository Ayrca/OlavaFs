
let cantidad = 0;

const numerosPares: number = encontrarNrospares(numeros1);

console.log('La cantidad de numeros pares es: ', cantidad);


function encontrarNrospares(numeros1) {


    for (let i = 0; i < 12; i++) {
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

