let i: number;

for (i = 0; i <= 100; i++) {
    let f: number = 1 * i;
    let resto2: number = f % 2;
    let resto3: number = f % 3;

    /* if (resto2 == 0) {
         console.log(f)
 
     } if (resto3 == 0) {
         console.log(f)
 
     } else if (resto2 == 0 && resto3 == 0) {
         console.log(f)
     }*/


    if (resto2 == 0 || resto3 == 0) { console.log(f) }
    else if (resto2 == 0 && resto3 == 0) { console.log(f) }

}
/*while (restoPar == 0 && restoImpar == 0) {

    console.log(f)
}*/

