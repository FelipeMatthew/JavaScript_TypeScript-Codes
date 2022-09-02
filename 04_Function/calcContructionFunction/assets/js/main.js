function CriaCalculadora(){
    
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBtn();
        this.pressionaEnter();
        this.pressionaBackspace();
    };
    
    this.clearDisplay = () => this.display.value = ''; 
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);
    
    this.btnParaDisplay = valor => {
        this.display.value += valor;
        this.display.focus();
    }

    this.realizaConta = () => {
        let conta = this.display.value;
              
              try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);

              }catch(err){
                alert('Conta inválida')
                return;
              }
    };

    this.pressionaEnter = () => { 
        this.display.addEventListener('keyup', e =>{       
            if(e.keyCode === 13) this.realizaConta();
            
        })
    };

    this.pressionaBackspace = () => {
        this.display.addEventListener('keydown', e => {
            if(e.keyCode === 8){
                e.preventDefault();
                this.clearDisplay();
            }
        })
    };

    this.cliqueBtn = () => {
        document.addEventListener('click', e => {
            const elemento = e.target;

            if(elemento.classList.contains('btn-num')) this.btnParaDisplay(elemento.innerText);
            if(elemento.classList.contains('btn-clear')) this.clearDisplay();
            if(elemento.classList.contains('btn-del')) this.apagaUm();
            if(elemento.classList.contains('btn-eq')) this.realizaConta();
        });
    };

}

const calculadora = new CriaCalculadora()
calculadora.inicia();
