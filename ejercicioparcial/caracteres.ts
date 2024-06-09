let arreglo: string[] = new Array(15);
cargarCaracteres(arreglo);
mostrarCaracteres(arreglo);
let cantidades = contarCaracteres(arreglo)
console.log(cantidades)
function cargarCaracteres(arreglo: string[]) {
    let i: number = 0;
    for (i; i < arreglo.length; i++) {
        arreglo[i] = caracteresAleatorio();
    }
}
function caracteresAleatorio(): string {
    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let letrasADevolver: string;
    letrasADevolver = letras[Math.floor(Math.random() * (letras.length - 1))];
    return letrasADevolver;
}
function mostrarCaracteres(arreglo: string[]) {
    let i: number = 0;
    let numeros: string = "";
    for (i; i < arreglo.length; i++) {
        numeros += arreglo[i] + " - ";
    }
    console.log("El arreglo es: ", numeros);
}
function contarCaracteres(arreglo: string[]): number[] {
    let i: number = 0;
    let sumaA: number = 0;
    let sumaE: number = 0;
    let sumaO: number = 0;
    for (i; i < arreglo.length; i++) {
        if (arreglo[i] === 'A') {
            sumaA += 1
        }
        else if (arreglo[i] === 'E') {
            sumaE += 1
        }
        else if (arreglo[i] === 'O') {
            sumaO += 1
        }
    }
    let cantidades: number[] = [sumaA, sumaE, sumaO]
    return cantidades
}
