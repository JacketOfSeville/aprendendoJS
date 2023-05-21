// const array = [1,2,3];
// array.push(4);


const pessoa1 = {
    nome: 'Vinicius',
    sobrenome: 'Krummenauer',
    idade: 20,

    fala() {
        console.log(`Minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);


// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade }
// }

// const pessoa1 = criaPessoa('Vinicius','Krummenauer',20);
// const pessoa2 = criaPessoa('Luiz','Otávio',25);

// console.log(pessoa1.nome, pessoa2.nome);