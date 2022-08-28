// const maiorNumber = (num1, num2) => num1 > num2 ? num1 : num2;

// const ePaisagem = (largura, altura) => largura >=  altura ? true : false;

function reciveNumber(num){ 
    
    let  i = 0;
    while(i < 100){

        if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
        if(num % 3 === 0) return 'Fizz';
        if(num % 5 === 0) return 'Buzz';
        if(num % 3 !== 0 && num % 5 !== 0) return num;
        if(typeof num !== 'number') return num;
        return num;
        i++;
    }
}
console.log(reciveNumber(10));