import * as rls from 'readline-sync'

let lista: number[] = new Array(5);


let indice: number;
let promedio: number = 0;
//Cargo el vector v1
for (indice = 0; indice < 5; indice++) {
    lista[indice] = rls.questionInt(`Ingrese el valor la posicion ${indice}: `);
}

for (indice = 0; indice < 5; indice++) {
    promedio += lista[indice];

}
promedio = promedio / 5
console.log(promedio);
//function cargarlista();