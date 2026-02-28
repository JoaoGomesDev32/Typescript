import { describe, expect, it, vi } from "vitest";
import { login } from "./login";

describe("login", () => {
	const alertMock = vi.fn();
	window.alert = alertMock;

	it("Deve exibir um alert com boas vindas", () => {
		login();
		expect(alertMock).toHaveBeenCalledWith("Bem vindo!");
	});
});
