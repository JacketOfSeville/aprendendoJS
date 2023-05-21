let num1 = 1;
let num2 = 2.5;
let abin = 255;
let deci = 15.68594341916524156;

/*
console.log(num1 + num2);
console.log(num1.toString() + num2);
console.log(typeof num1);

num1 = num1.toString();
console.log(typeof num1);

console.log(abin.toString(2));

console.log(deci.toFixed(2));
console.log(Number.isInteger(abin));
*/

let temp = num2 * 'Olá';
console.log(Number.isNaN(temp));

let num3 = 0.7;
let num4 = 0.1;

num3 = ((num3 * 100) + (num4 * 100)) / 100; //0.8
num3 = ((num3 * 100) + (num4 * 100)) / 100; //0.9
num3 = ((num3 * 100) + (num4 * 100)) / 100; //1.0

console.log(num3);
console.log(Number.isInteger(num3));