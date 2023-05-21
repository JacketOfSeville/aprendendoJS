const numero = prompt('Digite um número');
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

let inteiro;
let funciona;

if (numero % Math.ceil(numero) == 0){
    inteiro = `Sim`;
} else {
    inteiro = `Não`;
}

if (Number.isNaN(numero) == true){
    funciona = `Sim`;
} else {
    funciona = `Não`;
}

numeroTitulo.innerHTML = numero;
texto.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)} <br />`;
texto.innerHTML += `${numero} é inteiro? ${inteiro} <br />`;
texto.innerHTML += `É NaN? ${funciona} <br />`;
texto.innerHTML += `Arredondado para baixo: ${Math.floor(numero)} <br />`;
texto.innerHTML += `Arredondado para cima: ${Math.ceil(numero)} <br />`;
texto.innerHTML += `Com duas casas decimais: ${(Math.round(numero * 100) / 100).toFixed(2)} <br />`;