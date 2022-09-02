// atribuição via desestruturação de objetos
function funcao({nome, cpf, idade}){
    console.log(nome, cpf, idade);
}
funcao({nome: 'Felipe', cpf: '46639776855', idade: '18'})
console.log('#########');

function arrays([valor1,valor2,valor3]){
    console.log(valor1, valor2, valor3);
}
let frutas = ['maça', 'pera', 'goiaba'];
arrays(frutas);

console.log('#########');

const conta = function(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
    console.log('#########');
    console.log(arguments.length);
}

conta('+', 1 , 90, 80, 70, 60, 50)

console.log('#########');
const arrowConta = (...args) => {
    console.log(args);
}
arrowConta('+', 1 , 90, 80, 70, 60, 50);

console.log('#########');

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };

}
const duplicar = criaMultiplicador(2);
const numero = duplicar(3);

console.log(numero);

console.log('#########');
// Closure
const nome = 'Felipe';

function pegarNome(nome){
    return function(){
        return nome;
    }
}
const nomeOriginal = pegarNome(nome);
const nomeCriado = pegarNome('MeuBumbum');

// sem colocar os parenteses na constante ela vai retornar so a função
console.log(nomeOriginal, nomeCriado);
// Para retornar a palavra escrita se usa ();
console.log(nomeOriginal(), nomeCriado());




