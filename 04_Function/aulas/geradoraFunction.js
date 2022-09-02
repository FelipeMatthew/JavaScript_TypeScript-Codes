// function* geradora(){

//     yield 'valor1';

//     yield 'valor2';

//     yield 'valor3';
// }

// function* geradora2(){
//     let i = 0;

//     while(true){
//         yield i;
//         i++;
//     }
// }

// const g2 = geradora2();
// for (let loop = 0; loop <= 1000; loop++ ){
//     console.log(g2.next().value);
// }



function* geradora3(){

    yield 0;
    yield 1;
    yield 2;
    yield 3;
}
function* geradora4(){

    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}
const g4 = geradora4();

for (let loopar of g4){
    console.log(loopar)
}

function* geradora5(){

    yield function(){
        console.log('vim do y1');
    }

    yield function(){
        console.log('vim do y2')
    }
}
const g5 = geradora5();
const func1 = g5.next().value;

func1();