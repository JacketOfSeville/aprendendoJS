//               01234567
let umaString = "Um texto";

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log

console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('o', 7));

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[A-Z]/));
console.log(umaString.replace('Um', 'Outra'));

console.log(umaString.length);
console.log(umaString.slice(0, 5));

console.log(umaString.split(' '));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());