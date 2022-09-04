const a1 = [1,2,3,4,5];
const a2 = [6,7,8,9,10];
const concatArrays = [...a1, 'estou concatenando', ...a2, ...[11,12,13]];

// OU

const juntandoArray = a1.concat('estou concatenando',a2, [11,12,13])

console.log(concatArrays);
console.log(juntandoArray);
