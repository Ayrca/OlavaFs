export function acomodarStr(cadena: string): any {
    const datos2: string = cadena.trim();//saca los espacios de adelante y de atras de la cadena de caracteres
    const nuevoArray: string[] = datos2.split(" ");
    console.log(nuevoArray);
}
