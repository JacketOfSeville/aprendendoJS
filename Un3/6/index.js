// Factory Function (Função fábrica)
function criaPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,
    nomeCompleto(){
      return `${nome} ${sobrenome}`
    },
    fala: function(assunto) {
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

const p1 = criaPessoa('Vinicius', 'Krummenauer', 80, 1.8);
console.log(p1.nomeCompleto());
console.log(p1.imc);