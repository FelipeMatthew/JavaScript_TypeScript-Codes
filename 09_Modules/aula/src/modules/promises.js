function promessa(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('hey eu sou uma promise');
            resolve();
        }, 2000);
    });
};

export default async function (){
    try{
        await promessa();
        console.log('terminou');
    } catch(e){
        console.log(e);
    }
}