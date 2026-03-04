import { describe, expect, it, vi } from "vitest";
import { login } from "./login";

describe("login", () => {
	const mockAlert = vi.fn();
	window.alert = mockAlert;
	const mockEmail ="joao@dio.com"

	it("Deve exibir um alert com boas vindas", () => {
		login(mockEmail);
		expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`);
	});

	it("Não deve exibir mensagem de boas vindas se o email estiver vazio", () => {
		login(mockEmail);
		expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo!");
	});
});
