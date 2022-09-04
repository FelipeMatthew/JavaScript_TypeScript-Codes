const number = [50,20,65,10,20,1,3,6,9,8,4,55,66,11,02,33];

const pegarPares = number.filter( valor => valor % 2 === 0);
const dobrarValore = number.map( valor => valor *2);
const somaDosValore = number.reduce((acumulador, valor) => {
    return acumulador += valor;
})

console.log(`Os pares são: ${pegarPares}
Valor Dobrado: ${dobrarValore}
SomaDosValore ${somaDosValore}`);