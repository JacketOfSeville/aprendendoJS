// Factory Function (Função fábrica)
function criaPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,

    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
    },

    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    
    fala: function(assunto = 'falando sobre nada') {
      return `${this.nome} está ${assunto}.`;
    },

    peso,
    altura,
    get imc() {
      const indice = this.peso / (this.altura ** 2); 
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Vini', 'Krummenauer', 80, 1.8);
p1.nomeCompleto = 'Vinicius da Cruz Krummenauer';
console.log(p1.nomeCompleto);
console.log(p1.fala());