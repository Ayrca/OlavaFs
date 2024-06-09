import * as rls from 'readline-sync'

let nro1: number = rls.questionInt("Ingrese primero numero:");
let nro2: number = rls.questionInt("Ingrese segundo numero:");
let i: number;
let suma: number = 0;
for (i = nro1 + 1; i < nro2; i++) {

    suma = suma + i

}
console.log(suma)
