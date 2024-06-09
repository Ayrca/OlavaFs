import * as rls from 'readline-sync'

let nro: number = rls.questionInt("Ingrese numero del que desea visualizar tablas:");
let nroTablas: number = rls.questionInt("Ingrese hasta que tabla desea visualizar:");

let i: number;
let tot: number;
for (i = 1, i <= nroTablas; i++;) {
    let total: number;
    while (i <= nroTablas) {
        total = nro * i;
        tot = total
        console.log(nro, "x", i, "=", tot);
    }
}
function tAblas()