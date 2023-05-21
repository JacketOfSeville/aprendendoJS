/* 
Primitivos (imutáveis) 
string - number - boolean - undefined - null (bigint - symbol)

Referência (mutáveis)
array - object - function
*/

//         01234567
// let nome = 'Vinicius';
// console.log(nome[0]);

// let a = nome;
// console.log(a);

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b); 

// b.pop();
// console.log(b);

const a = {
    nome: 'Vinicius',
    sobrenome: 'Krummenauer'
};
const b = a;

a.nome = 'João';
console.log(b);