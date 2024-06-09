import * as rls from 'readline-sync'

let base: number = rls.questionInt("Ingrese base:");
let exponente: number = rls.questionInt("Ingrese exponente:");
let i: number;
let potencia: number;
function calcular(exponente: number, base: number) {
    if (exponente >= 0) {
        if (exponente === 0) { return 1; };

        return calcularPotencia(base, exponente)
    }

};


function calcularPotencia(base: number, exponente: number): number {
    let resultado: number = 1;
    for (i = 0; i <= exponente; i++) {
        resultado = resultado * base;
    }

    return resultado;

}

console.log(calcular(exponente, base))








/*if (exponente = 0) {
    console.log("El resultado es 1");
}
else {
    for (i = 0; i <= exponente; i++) {
        multiplicacion
    }
    let valor: number = multiplicacion(base, exponente);
    console.log(valor)
}*/





