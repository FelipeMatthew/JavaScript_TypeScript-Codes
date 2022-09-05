function randonNumber(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function waitABit(msg, time){
    return new Promise ((resolve, reject) =>{
        if( typeof msg !== 'string'){
            reject(new Error());
            return;
        } 

        setTimeout(() => {
            resolve(msg);
            return;
        } ,time);
    })  
}


const promessas = [
    'Frase 1',
    waitABit('promisse 1', 4000),
    waitABit('promisse 3', 600),
    waitABit('promisse 5', 4000),
    waitABit(1000, 500),
    'Outro valor'
];

// Promisse.all
Promise.all(promessas)
    .then(value => {
        console.log(value);
    })
    .catch(erro => {
        console.log(erro);
    });

// Promisse.race
Promise.race(promessas)
    .then(value => {
        console.log(value);
    })
    .catch(erro => {
        console.log(erro);
    });

// Promise.resolve && Promise.reject
function downloadPage(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página está em cache')
    }else{
        return Promise.reject('ERRO', new Error());
    }
}

downloadPage()
    .then( dadosDaPagina => {
            console.log(dadosDaPagina);
    })
    .catch( e => console.log(e));
