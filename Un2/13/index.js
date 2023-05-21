const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Krummenauer',
    idade: 20,
    endereco: {
        rua: 'Arnoldo',
        numero: 500
    }
};

const { 
    endereco: { rua: r = 12345, numero }, 
    endereco 
} = pessoa;
console.log(r, numero, endereco);

const { nome, ...resto} = pessoa;
console.log(resto);