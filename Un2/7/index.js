// ? :

const ptsUser = 999;
const nivelUser = ptsUser >= 1000 ? 'VIP' : 'Normal';

const corUser = null;
const corPadrao = corUser || 'Preto';

console.log(nivelUser, corPadrao);

/* if (ptsUser >= 1000) {
    console.log('Vip');
} else {
    console.log('Normal');
} */