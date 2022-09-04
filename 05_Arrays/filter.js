const number = [50,20,65,10,20,1,3,6,9,8,4,55,66,11,02,33];
const filterNumbers = number.filter((value, indice, array) => {
    return value < 10;
});
console.log(filterNumbers); console.log('\n');

const pessoas = [
    {nome: 'Felipe', idade: 18},
    {nome: 'Sabrina', idade: 20}, 
    {nome: 'Fernanda', idade: 50}, 
    {nome: 'Elcio', idade: 42}, 
    {nome: 'Elisangela', idade: 40},
    {nome: 'Tatiane', idade: 17}, 
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
const pessoasComMaisDe25anos = pessoas.filter(obj => obj.idade >= 25);
const pessoasComFinalA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande, pessoasComMaisDe25anos, pessoasComFinalA);
