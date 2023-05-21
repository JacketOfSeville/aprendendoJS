function getTimeSeconds(segundos) {
  const data = new Date(segundos * 1000);

  return data.toLocaleTimeString('pt-BR', { 
    hour12: false,
    timeZone: 'GMT' 
  });
}

document.addEventListener('click', function(e) {
  const el = e.target;
  console.log(el);
});

console.log(getTimeSeconds(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function startClock() {
  timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = getTimeSeconds(segundos);
  }, 1000);
}

iniciar.addEventListener('click', function(event) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  startClock();
});

pausar.addEventListener('click', function(event) {
  clearInterval(timer);
  relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(event) {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
});