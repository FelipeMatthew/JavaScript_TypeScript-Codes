const a1 = [50,60,35,55,15,49,55,66,22,11,06];
let total = 0;

// const soma = a1.forEach((valor, indice, array) => {
//     return total += valor;
// });

const somaReduzida = a1.forEach( value => total += value);
console.log(total);
