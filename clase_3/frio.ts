import * as rls from 'readline-sync'

let haceFrio: boolean = true;
let estaLloviendo: boolean = false;
if (haceFrio) {
    if (estaLloviendo) {
        console.log('Me quedo en casa');
    } else {
        console.log('Vengo al curso del CFL');
    }
}