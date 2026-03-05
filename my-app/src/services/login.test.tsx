import { describe, expect, it, vi, beforeEach } from "vitest";
import { login } from "./login";

// keep the real api promise to avoid async delays in tests

describe("login", () => {
	const mockAlert = vi.fn();
	window.alert = mockAlert;

	const mockEmail = "joao@dio.bank";

	beforeEach(() => {
		mockAlert.mockClear();
	});

	it("Deve exibir um alert com boas vindas caso o email válido", async () => {
		const result = await login(mockEmail);
		expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`);
		expect(result).toBeUndefined();
	});

	it("Não deve exibir mensagem de boas vindas se o email estiver vazio", async () => {
		await login("");
		expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo");
		expect(mockAlert).toHaveBeenCalledWith("Email inválido");
	});

	it("Deve exibir um erro caso o email seja inválido", async () => {
		await login("email@invalido.com");
		expect(mockAlert).toHaveBeenCalledWith("Email inválido");
	});

	it("Retorna undefined (void) após execução", async () => {
		const res = await login(mockEmail);
		expect(res).toBeUndefined();
	});
});
