import * as rls from "readline-sync";

/*
let posicion: number = rls.questionInt("Ingrese la posicion del participante:");
let medallaoro: string = "Entregar al participante medalla de oro";
let medallaplata: string = "Entregar al participante medalla de plata";
let medallabronce: string = "Entregar al participante medalla de bronce";
let medallapartic: string = "Entregar al participante medalla de participacion";
if (posicion == 1) {
    console.log(medallaoro);
} else if (posicion == 2) {
    console.log(medallaplata);
} else if (posicion == 23) {
    console.log(medallabronce);
} else if (posicion > 3) {
    console.log(medallapartic);
}
*/
let posicionLlegada: number = rls.questionInt("Ingrese la posición de llegada del competidor: ");
switch (posicionLlegada) {
    case 1:
        console.log("Entregar medalla de oro");
        break;
    case 2:
        console.log("Entregar medalla de plata");
        break;
    case 3:
        console.log("Entregar medalla de bronce");
        break;
    default:
        console.log("Entregar mención de participación");
}