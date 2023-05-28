function* gerador1() {
  // Código
  yield 'Valor 1';
  // Código
  yield 'Valor 2';
  // Código
  yield 'Valor 3';
};

function* gerador2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

function* gerador3() {
  yield 0;
  yield 1;
  yield 2;
}

function* gerador4() {
  yield* gerador3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = gerador4();

function* gerador5() {
  yield function() {
    console.log('y1');
  };

  yield function () {
    console.log('y2');
  };
}

const g5 = gerador5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();