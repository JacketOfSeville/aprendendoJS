//                     1111111111
//           01234567890123456789
const nome= 'Vinicius Krummenauer';
console.log(nome[0]);

//               0       1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[1]);

alunos[0] = 'Vinicius'; // Insere no index
console.log(alunos);
console.log(alunos.length);

alunos.push('Sérgio'); // Insere no final
console.log(alunos);
console.log(alunos.length);

alunos.unshift('Túlio'); // Insere no começo
console.log(alunos);
console.log(alunos.length);

alunos.pop(); // Remove último índice
console.log(alunos);
console.log(alunos.length);