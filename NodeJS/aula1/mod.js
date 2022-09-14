// const nome = 'Felipe';
// const sobrenome = 'Matthew';
// const fala = () => nome +' '+ sobrenome;


// exports.fala = fala;
// exports.nome = nome;
// this.nada = 'Azideia carai';

class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

exports.Pessoa = Pessoa;
