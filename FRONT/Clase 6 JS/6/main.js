let contenedor = document.getElementById("contenedor");
// let parrafo = document.getElementById("parrafo");
// let parrafo2 =  document.getElementById("parrafo2");

// contenedor.innerHTML += "<p>Chau a todos</p>";

// parrafo2.innerText = "Parrafo desde JS";

//------------------------------------------------------------------

//crear elemento 
// let elemento = document.createElement("h2");

// //crear texto que lleva el elemento
// let texto = document.createTextNode("Texto a ingresar en el elemento");

// //pasarle el texto a mi elemento
// elemento.appendChild(texto);

// //agregarle el elemento a mi contenedor
// contenedor.appendChild(elemento);

///-------------------------------------------------------------------------
let lista = document.getElementById("lista")
const productos = ["Pan", "Leche", "Carne","Papas", "Jamon","Pan", "Leche", "Carne","Papas", "Jamon"];
const precios = [2000, 1500, 8000, 3000, 6000,2000, 1500, 8000, 3000, 6000];

function pintarProductos(arrayProductos, arrayPrecios){

    for(let i = 0; i < arrayProductos.length; i++){
        let li = document.createElement("li");
        let texto = document.createTextNode(`Nombre: ${arrayProductos[i]} - Precio: $${arrayPrecios[i]}`);
        li.appendChild(texto);
        li.setAttribute("class", "amariila");
        lista.appendChild(li);
    }
}
// pintarProductos(productos,precios);

function pintarProductos2(arrayProductos, arrayPrecios){

    for(let i = 0; i < arrayProductos.length; i++){
       lista.innerHTML += `<li class="tamaño"> Prod: ${arrayProductos[i]} - ¨Precio: $${arrayPrecios[i]} </li>`
    }
}

// pintarProductos2(productos,precios);


function crearImagen(url, textoAlternativo, clase){
    let img = document.createElement("img");
    img.setAttribute("src",url );
    img.setAttribute("alt", textoAlternativo );
    img.setAttribute("class", clase);
    contenedor.appendChild(img);
}

crearImagen("./js.png", "Imagen de Javascript", "tamaño");

crearImagen("./flores-moradas.webp", "Flores", "color");


