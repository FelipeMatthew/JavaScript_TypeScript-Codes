// const produto = {nome: 'mopa', idade: 18};
// const copiarProduto = {...produto,
//     cpf: 466639776855
// };

// console.log(produto);
// copiarProduto.nome = 'Alex'
// copiarProduto.idade = 65
// console.log(copiarProduto);
 
const product = {preco: 6.50, estoque: 9}
const newProduct = Object.assign({}, product, {desconto: 5});

console.log(product);
console.log(newProduct);

console.log(Object.getOwnPropertyDescriptor(product, 'estoque'));

for( let [chave, valor] of Object.entries(product)){
    console.log(chave, valor);
}
