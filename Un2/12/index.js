// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numeros = [b, c, a];

// [a, b, c] = numeros;

// console.log(a, b, c);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primer, segund, ...resto] = number;

console.log(primer, segund);
console.log(resto);