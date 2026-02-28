export const soma = (num: number): number => {
	return num + 10;
}

export const multiplicacao = (num: number, mult: number): number | string => {
	if(mult === 2 || mult === 3) {
		return num * mult;
	}
	return 'Multiplicador não permitido';
}