const number = [50,20,65,10,20,1,3,6,9,8,4,55,66,11,02,33];

const acumuladorPares = number.reduce((acumulador, valor, indice, array) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
},[]); //essa chave é valor do acumulador;
console.log(acumuladorPares);

const soma = number.reduce((acumulador, valor) => {
    return acumulador += valor;
}, 0);
console.log(soma);

const pessoas = [
    {nome: 'Felipe', idade: 18},
    {nome: 'Sabrina', idade: 20}, 
    {nome: 'Fernanda', idade: 50}, 
    {nome: 'Elcio', idade: 42}, 
    {nome: 'Elisangela', idade: 40},
    {nome: 'Tatiane', idade: 17}, 
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(pessoaMaisVelha);
