class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        return `${this.nome} esta comendo`
    }

    cantar(){
        return `${this.nome} esta cantando`;
    }

    chorar(){
        return `${this.nome} esta chorando`;
    }
}

const criarPessoas = new Pessoa('Felipe', 'Matthew');

// console.log(criarPessoas.cantar());
