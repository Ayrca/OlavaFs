// let btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//   let t_bomba = 5;

//   alert("Corra en 5 segundos se activará la Bomba");

//   setTimeout(function(){
//   cuentaRegre(t_bomba); }, 5000); 
//  });

// function cuentaRegre(i) {

//     let intervalo = setInterval(function() {

//        console.log(i)

//         if (i === 0) {
//             clearInterval(intervalo); // limpio intervalo para detener
//             alert('BOOOOOM!!');
//         }
//         else {
//             i--;
//         }
//     }, 1000);
// }

let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let tiempoBomba = 5;

    setTimeout(function(){
      cuentaRegresiva(tiempoBomba)
    }, 5000);

});

function cuentaRegresiva(i) {
    let intervalo = setInterval(function(){
        console.log(i);
        if(i === 0){
            clearInterval(intervalo);
            alert("BOOOOOM")
        }else {
            i--
        }

    },
1000)
}