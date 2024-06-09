var i;
for (i = 0; i <= 100; i++) {
    var f = 1 * i;
    var resto2 = f % 2;
    var resto3 = f % 3;
    /* if (resto2 == 0) {
         console.log(f)
 
     } if (resto3 == 0) {
         console.log(f)
 
     } else if (resto2 == 0 && resto3 == 0) {
         console.log(f)
     }*/
    if (resto2 == 0 || resto3 == 0) {
        console.log(f);
    }
    else if (resto2 == 0 && resto3 == 0) {
        console.log(f);
    }
}
/*while (restoPar == 0 && restoImpar == 0) {

    console.log(f)
}*/
