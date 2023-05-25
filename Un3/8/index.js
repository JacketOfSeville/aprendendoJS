function Pessoa(nome, sobrenome) {
  // Privado
  const ID = 1;
  const metodoInterno = function() {

  };

  //Público
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.method = function() {
    console.log(this.nome + ' Método');
  } 
}

const p1 = new Pessoa('Vinicius', 'Krummenauer');
const p2 = new Pessoa('Fulano', 'da silva');

console.log(p1.nome);
console.log(typeof(p1));
p1.method();