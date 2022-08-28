function horario(data){

    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando a instancia de date');
    }
    if(!data) data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
} 


try{
    const hora = horario('da233232323da');
    console.log(hora);
}catch(err){
    console.log(err);
}
finally{
    console.log('Tenha um otimo dia');
}