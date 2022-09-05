class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false; //desligado
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} está ligado`); 
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} está desligado`); 
            return;
        }
        
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
    
};

class Tablet extends DispositivoEletronico{
    constructor(nome, temWIFI){
        super(nome);
        this.temWIFI = temWIFI;
    }
    static mopa(){

    };

    ligar(){
        console.log('voce alterou o metodo ligar');
    }
}

const tablet1 = new Tablet('ipad', true);
console.log(tablet1.ligar());
