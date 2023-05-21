(function() {
  const sobrenome = 'Krummenauer';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Vini'));
  }

  falaNome();

})();

const nome = 'Coisa';