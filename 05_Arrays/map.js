const number = [50,20,65,10,20,1,3,6,9,8,4,55,66,11,02,33];

const numberEmDobro = number.map((valor, indice, array) => {
    return `${valor}, valor em dobro: ${valor * 2}`;
});
console.log(numberEmDobro);

const pessoas = [
    {nome: 'Felipe', idade: 18},
    {nome: 'Sabrina', idade: 20}, 
    {nome: 'Fernanda', idade: 50}, 
    {nome: 'Elcio', idade: 42}, 
    {nome: 'Elisangela', idade: 40},
    {nome: 'Tatiane', idade: 17}, 
];

const retornaNome = pessoas.map( obj => obj.nome);
const retornaIdade = pessoas.map(obj => ({idade: obj.idade}));

const criarId = pessoas.map( (obj, indice) => {
    
    const newObj = {...obj};
    newObj.id = (indice + 1) * 159765462;
    return newObj;
});

console.log(retornaNome,`\n`, retornaIdade, `\n`, criarId);