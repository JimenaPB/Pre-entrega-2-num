const numeros = [];
let entrada = prompt("Ingrese un numero");
while (entrada !== null){
numeros.push(entrada)
entrada = prompt("Ingresa otro número o apreta cancelar para salir")
}
    let respuesta=true;
    do{ 
        respuesta =  parseInt(prompt("\n1.- Mostrar Todos los números\n2.- Mostrar números Pares\n3. Mostrar números impares\n4.- Mostrar números positivos\n5.- Mostrar números negativo\n6.- Salir"));
switch (respuesta) {
    case 1:
    alert(numeros)
    break;
    case 2:
    const numerosPares = numeros.filter(function (num){
        return num % 2 ===0; })
        alert(numerosPares)
    break;
    case 3:
    const numerosImpares = numeros.filter(function (num){
        return num % 2 ===1;})
        alert(numerosImpares)
    break;
    case 4:
    const numerosPositivos = numeros.filter(function (num){
        return num > 0;})
        alert(numerosPositivos)
    break;
    case 5:
        const numerosNegativos = numeros.filter(function (num){
        return num < 0;})
        alert(numerosNegativos)
        break;
    case 6:
    alert("Hasta Luego!!!");
    break;
    default:
    alert("Opción invalida!!");
    break;
}
}while (respuesta!== 6);
