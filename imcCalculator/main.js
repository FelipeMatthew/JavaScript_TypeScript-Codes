class CalculaIMC{
    constructor(){
        this.result = document.querySelector('.result');
        this.form = document.querySelector('.form');
        this.p = document.createElement('p');
    }
    init(){
        this.events();
    }
    events(){
        this.form.addEventListener('submit', evt => {
            evt.preventDefault();

            const inputName = evt.target.querySelector('.name');
            const inputHeight = evt.target.querySelector('.altura');
            const inputWeight = evt.target.querySelector('.peso');

            const nameValue = String(inputName.value);
            const heightValue = Number(inputHeight.value);
            const weightValue = Number(inputWeight.value);

            if(!nameValue){
                this.output('Nome inválido', false);
                return;
            }
            if(!heightValue){
                this.output('Altura inválida', false);
                return;
            }
            if(!weightValue){
                this.output('Peso inválido', false);   
                return;        
            }

            const resultIMC = this.calculationIMC(weightValue, heightValue);
            const IMC = this.getIMC(resultIMC);
            const msg = `Olá ${nameValue} <br>Seu IMC é de: ${resultIMC} <br>O seu caso é de: ${IMC}`;

            this.output(msg, true);
            
        })
    }
    calculationIMC(weight, height){
        const imc = Number((weight / (height * height)).toFixed(2));
        return imc;
    }

    getIMC(imc){
        if(imc <= 18.5) return 'Abaixo do peso';
        if(imc <= 24.9) return 'Peso normal'
        if(imc <= 29.9) return 'Sobrepeso';
        if(imc <= 34.9) return 'Obesidade grau 1';
        if(imc <= 39.9) return 'Obesidade grau 2';
        if(imc >  40   ) return'Obesidade grau 3';
    }

    output(msg, validator){
        this.result.innerHTML = '';        

        validator ? this.p.classList.add('validator-true') : this.p.classList.add('validator-false');

        this.result.appendChild(this.p);
        this.p.innerHTML = msg;
    }
}

const imc = new CalculaIMC();
imc.init();