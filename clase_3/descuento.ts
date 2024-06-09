import * as rls from "readline-sync";

let precioProducto: number = rls.questionInt("Ingrese precio del producto:");
let cantidadProducto: number = rls.questionInt("Ingrese cantidad de producto:");
let totalCompra: number = precioProducto * cantidadProducto;
if (totalCompra >= 1000) {
    totalCompra = totalCompra * 0.9, console.log("Se aplico un descuento del 10%, Total:", totalCompra)

} else {
    console.log("Total:", totalCompra)

}
