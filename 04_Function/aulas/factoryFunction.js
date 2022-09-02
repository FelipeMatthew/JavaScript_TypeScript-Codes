function criarPessoa(nome, sobrenome, altura, peso, imc){
    return {
        nome,
        sobrenome,
        altura,
        peso,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' '); //Vai transformar em array com espaços no nome
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre nada'){
            return `${this.nome} está ${assunto}.`;// this é quem chamou ele;
        },

        get imc(){
           const indice = this.peso  / (this.altura ** 2);
           return `Seu IMC é: ${indice.toFixed(2)}`;
        }

    };

}

const pessoa1 = criarPessoa('felipe', 'matthew', 1.80, 80);


console.log(pessoa1.fala('fofocando'));
console.log(pessoa1.imc);
console.log(pessoa1.nomeCompleto);
console.log(pessoa1.nomeCompleto);
