const nomes = ['Eduardo', 'Maria', 'Jonas'];
console.log(nomes.length);

const novo = [...nomes];
const nuevo = nomes.slice(1,-1);

novo.pop();
console.log(nomes);
console.log(novo);
console.log(nuevo);

const id = 'Vinicius da Cruz Krummenauer';
const ids = id.split(' ');
console.log(ids);