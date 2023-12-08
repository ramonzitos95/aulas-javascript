var nome = "Ramon";
console.log(nome);

var nome = 'Ramon';
console.log(nome);

let index = 3;
const frase = "O Ramon está programando.";
console.log("A posição é: " + frase.charAt(index));

console.log("CharCodeAt: " + frase.charCodeAt(index));

const nome1 = 'Andre';
const sobrenome = 'Silva'
console.log('Concat: ' + nome1.concat(' ', sobrenome));

var sentence = "O Ramon está programando.";
const stringEndWith = 'programando.'
console.log('EndsWith: ' + sentence.endsWith(stringEndWith));

console.log('Includes: ' + sentence.includes('batata'));

const a = 'reserva'
const b = 'reserva'
console.log('localcompare: ' + a.localeCompare(b));

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log('match: ' + found);

const fraseReplace = 'O Ramon esta na frente do computador';
console.log('replace: ' + fraseReplace.replace('frente', 'atras'));

const paragraph2 = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex2 = /[^\w\s']/g;

console.log('search: ' + paragraph.search(regex2));
// Expected output: 41

console.log('search: ' + paragraph[paragraph.search(regex2)]);

console.log('slice: ' + paragraph2.slice(10));
console.log('slicePart: ' + paragraph2.slice(1, 9));

console.log('uppercase: ' + nome.toUpperCase());
console.log('lowercase: ' + nome.toLocaleLowerCase());

const trimExemplo = '  RAMONSILVA  ';
console.log('trim: ' + nome.trim());
console.log('trimEnd: ' + nome.trimEnd());
console.log('trimStart: ' + nome.trimStart());