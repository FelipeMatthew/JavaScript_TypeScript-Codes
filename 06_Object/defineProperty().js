 function Produto (nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        // Um objeto de definição de propiedades
        enumerable: true, //Deixa visivel
        value: estoque, //valor da chave
        writable: false, //Pode alteraar o valor ou não
        configurable: false //configuravel, pode apagar?
    });

    Object.defineProperties(this, {
        nome: { //Define as propriedades desse objeto
            enumerable: true, 
            value: nome,
            writable: true, 
            configurable: false
        },

        preco: {
            enumerable: true, 
            value: preco,
            writable: true, 
            configurable: false
        }
    });
 }