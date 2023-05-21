let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let dummy;

/*
dummy = varC; // Registra C
varC = varA;  // C => A
varA = varB;  // A => B
varB = dummy; // B => C 
*/

[varA, varB, varC] = [varB, varC, varA];

console.log(varA,varB,varC);
console.log(varA.charAt[0]);