import { describe, it, expect } from "vitest";
import { soma, multiplicacao } from "./soma";

describe("soma", () => {
	it("deve somar 10 ao numero informado", () => {
		const value = soma(5);
		expect(value).toBe(15);
	});

	it('deve multiplicar o numero por 2', () => {
		const value = multiplicacao(2, 2);
		expect(value).toBe(4);
	})

	it('deve multiplicar o numero por 3', () => {
		const value = multiplicacao(2, 3);
		expect(value).toBe(6);
	});

	it('deve informar error, com multiplicador diferente de 2 ou 3', () => {
		const value = multiplicacao(2, 5);
		expect(value).toBe('Multiplicador não permitido');
	});
});
