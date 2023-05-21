const verdadeira = true;

// Let tem escopo de bloco
// Var tem escopo de função

let nome = 'Vinicius'; // criando
var nome2 = 'Vini';

if (verdadeira) {
    let nome = 'Otávio';
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}