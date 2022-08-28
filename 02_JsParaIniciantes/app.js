// console.log("Teste do node js aaaa");
// console.log("Mais um teste do node vamos ver se está certo");
// console.log("Meu nome é: 'Felipe Matthew'","E estou aprendendo javascript as:", 10, " da manha");

// const nome = 'felipe';
// const sobrenome = 'matthew';
// const idade = 18;
// const BirthYear = 2004;
// const imc = 19.95;

// console.log(`Ola meu nome é: ${nome} ${sobrenome}\nTenho: ${idade} anos e nasci no ano de: ${BirthYear}\ne meu imc é de: ${imc}`);

// let mopa = 2;
// mopa **= 10;
// console.log(mopa);

// parseFloat('50.6');
// parseInt('566.4');
// Number(54556456456546.45645456546);

// // alert("mopa");
// // confirm("quer continuar?"); // ok = true || cancel = false
// // prompt("me informe seu nome");

// let num1 = Number(prompt("informe o primeiro valor: "));
// let num2 = Number(prompt("informe o segundo valor: "));
// const soma = num1 + num2;
// // alert(`o resultado da soma é: ${soma}`);

// //exercicio de atribuiçao de valores em variaveis

let a = 'a'; //b
let b = 'b'; //c
let c = 'c'; //a
let holdVar = '*';

holdVar = a;
a = b;
b = c;
c = holdVar;

[a, b, c] = [b, c, a];

console.log(a, b, c);

const nome = (nome) => console.log(`Seu nome é ${nome}`);
// nome = function (nome){
// return console.log("Seu nome é ${nome}");
// }
// Arrow function

function criarCadastro(nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}
const pessoa1 = criarCadastro('felipe', 'matthew', 18);
const pessoa2 = criarCadastro('tatiane', 'dos santos', 17)

console.log(pessoa1.sobrenome)


 



