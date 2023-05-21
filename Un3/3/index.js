function retornaFuncao() {
  const nome = 'Vini';
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao();
console.log(funcao);