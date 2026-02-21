const array: Array<number> = [1, 2, 3, 4];

const stringArray: string[] = ['a', 'b', 'c'];

//console.log(array[1]);

//console.log(stringArray.length);

console.log('array original', array);

array.push(5);

console.log('array com novo elemento', array);

array.pop();

console.log('retirando o ultimo elemento do array', array);

/*for

for(let i = 0; i < 5; i++) {
	console.log(i);
}

let n = 2;
while (n < 6) {
	console.log(n);
	n++;
}
*/
/*decisoes e repeticoes
const num: number = 15;

if (num > 15) {
	console.log('Num maior que 15')
} else if (num === 15) {
	console.log('Num igual a 15')
} else {
	console.log('Num menor que 15')
}

const typeUser = {
	admin: 'Seja bem vindo admin',
	student: 'Você é um estudante',
	viewer: 'Você pode visualizar'
}

function validateUser(user: string) {
	console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin';

validateUser(usuario)
validateUser('student')
validateUser('viewer')
*/
/*
variaveis e tipos
let b: string = 'b';
let n: number = 2;
let x: boolean = true;

let m: any = 2;
m = "João";
m = false;
*/

/*interfaces e objetos
interface Pessoa {
	nome: string,
	idade: number,
	profissao?: string
}

const pessoa: Pessoa = {
	nome: 'João',
	idade: 36
}

const outraPessoa: Pessoa = {
	nome: 'Paulo',
	idade: 33,
	profissao: 'Desenvolvedor'
}

const arrayPessoa: Array<Pessoa> = [
	pessoa,
	outraPessoa
]

const arrayNum: number[] = [
	1, 2, 3
]

const arrayString: Array<string> = [
	'1', '2', '3'
]
*/
