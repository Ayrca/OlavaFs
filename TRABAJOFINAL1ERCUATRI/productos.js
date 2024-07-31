let arroz = [nombree = arroz, precio = 1500, stock = 30];

let leche = [leche, 1500, 30];
let fideos = [fideos, 1500, 30];
let jugo = [jugo, 1500, 30];
let aceite = [aceite, 1500, 30];





let nombree = document.querySelector("p[name=nombree]");
nombree.innerHTML = producto[0].nombree;
let precio = document.querySelector("p[name=precio]");
precio.innerHTML = producto[0].precio;
let stock = document.querySelector("p[name=stock]");
stock.innerHTML = stock[0].cantidad;

actualizarDatos()


let input = document.querySelector("#inpCantCompra");
input.addEventListener("keyup", (Event) => {
    Event.preventDefault();
    let cantAcomprar = document.querySelector("#inpCantCompra").value;

    if (stock > producto[0].cantidad) {
        document.querySelector("#inpCantCompra").value = producto[0].cantidad;
        document.querySelector("#inpCantCompra").classList.add("error");
        console.log("elija una cantidad menor");
    } else
        console.log("todo bien");
    if (cantAcomprar < 0) {
        document.querySelector("#inpCantCompra").value = 0;
    }
})
document.querySelector("#inpCantCompra").setAttribute("max", producto[0].cantidad)
document.querySelector("#inpCantCompra").setAttribute("min", producto[0].cantidad)
let form = document.querySelector("form").addEventListener("submit", (Event) => {
    Event.preventDefault();
    let cantAcomprar = document.querySelector("#inpCantCompra").value = 0;
    if (cantAcomprar > producto[0].cantidad) {
        console.log("elija una cantida menor");
    } else
        producto[0].cantidad = producto[0].cantidad - cantAcomprar;
    document.querySelector("#inpCantCompra").value;
    actualizarDatos();
    borrarInputs();

})
function actualizarDatos() {
    nombre.innerHTML = producto[0].nombre;
    precio.innerHTML = producto[0].precio;
    stock.innerHTML = stock[0].cantidad;
};
function borrarInputs() {
    document.querySelector("#inpCantCompra").value = 0;
};
