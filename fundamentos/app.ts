/*
variaveis e tipos
let b: string = 'b';
let n: number = 2;
let x: boolean = true;

let m: any = 2;
m = "João";
m = false;
*/

//interfaces e objetos
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

