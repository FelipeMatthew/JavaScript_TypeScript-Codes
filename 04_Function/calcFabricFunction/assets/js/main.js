    function criaCalculadora(){

        return {
            display: document.querySelector('.display'),
          
            inicia(){
                this.cliqueBtn();
                this.pressionaEnter();
                this.pressionaBackspace();
            },


            clearDisplay(){
                this.display.value = ''; 
            },

            apagaUm(){
                this.display.value = this.display.value.slice(0, -1);
            },

            realizaConta(){
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
            },
            pressionaEnter(){
                this.display.addEventListener('keyup', e =>{       
                    if(e.keyCode === 13){
                        this.realizaConta();
                    }
                })

            },

            pressionaBackspace(){
                this.display.addEventListener('keydown', e => {
                    if(e.keyCode === 8){
                        e.preventDefault();
                        this.clearDisplay();
                    }
                })
            },


            cliqueBtn(){
                document.addEventListener('click', e => {
                    const elemento = e.target;

                    if(elemento.classList.contains('btn-num')){
                        this.btnParaDisplay(elemento.innerText);
                    }

                    if(elemento.classList.contains('btn-clear')){
                        this.clearDisplay();
                    }

                    if(elemento.classList.contains('btn-del')){
                        this.apagaUm();
                    }
                    
                    if(elemento.classList.contains('btn-eq')){
                        this.realizaConta();
                    }

                }); 
            },

            btnParaDisplay(valor){
                this.display.value += valor;
            },

        };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia();


