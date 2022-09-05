function randonNumber(min = 0, max = 3){
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
            resolve(msg.toUpperCase() + ' - passei na promise');
            return;
        } ,time);
    })  
}

// Muito verboso e poluido

// waitABit('Fase 1', randonNumber())
//     .then( value => {
//         console.log(value);
//         return waitABit('Fase 2', randonNumber);
//     })
//     .then(fase => {
//         console.log(fase);
//         return waitABit('Fase 3', randonNumber());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase
//     })
//     .then( fase => console.log('terminamos na fase: ', fase))
//     .catch( e => console.log('ERRO:' + e));

async function executa(){
    try{           
        const fase1 =  await waitABit('Fase 1', randonNumber());
        console.log(fase1);

        const fase2 =  await waitABit('Fase 2', randonNumber());
        console.log(fase2);
        
        const fase3 =  await waitABit('Fase 3', randonNumber());
        console.log(fase3);

        console.log('termindado na fase: ' + fase3);

    }catch(e){
        console.log(e);
    }
}
executa();