import * as rls from 'readline-sync'

let lucesEncendidas: boolean = true;
let litrosNafta: number = 10;
if (lucesEncendidas && litrosNafta > 0) {
    console.log('Puedo manejar de noche');
}