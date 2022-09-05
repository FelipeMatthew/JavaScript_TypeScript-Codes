function randonNumber(min, max){
    min *= 1000;
    max*= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

// function esperaAi(msg, tempo, callback){
//     setTimeout(()=>{
//         console.log(msg);
//         if(callback) callback();
//     }, tempo);
// }
// // Callback
// esperaAi('Frase1', randonNumber(1, 6), function(){
//     esperaAi('Frase2', randonNumber(1, 6), function(){
//         esperaAi('Frase1', randonNumber(1, 6));
//     });
// });

// Agora com promisse
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error());

        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    })    
}

esperaAi('Frase 1', randonNumber(1, 5))
.then(resposta =>{
    console.log(resposta);
    return esperaAi('Frase 2', randonNumber(1, 5))
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(99999, randonNumber(1, 5))
})
.then(resposta =>{
    console.log(resposta);
})
.then(() => {
    console.log('Agora sim eu souu o ultimo nessa bagaça');
}).catch( e =>{
    console.log('ERROR:', e);
})
