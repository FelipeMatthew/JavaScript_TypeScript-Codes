function getHour(){
    let hora = new Date();

    return hora.getSeconds();
}
const timer = setInterval(() => {
    console.log(getHour());
}, 1000);

setTimeout(()=>{
    clearInterval(timer);
}, 5000);