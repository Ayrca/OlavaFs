"use strict";

let btn = document.querySelector("#btn1")
btn.addEventListener("click", cambiarTexto)

//var variable1;
function cambiarTexto() {

    let titulo = document.querySelector("#textInp").value;
    document.getElementById("titulo").innerText = titulo;
};
/*
alert("hola");

console.log(document.getElementById("titulo"));
console.log(document.getElementsByName("textInput"));

console.log(document.getElementsByTagName("input"));

/*
console.log(document.getElementById("titulo").innerText)
console.log(document.getElementById("titulo").innerHTML)

console.log(document.querySelector("#titulo"));/*se usa # si se trata de un id
console.log(document.querySelector(".titulo"));/*se usa # si se trata de una clase

*/
