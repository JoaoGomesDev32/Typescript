const conta = {
	email: "joao@dio.bank",
	password: "123456",
	name: "João Silva"
}

export const api = new Promise((resolve) => {
	setTimeout(() => {
		resolve(conta)
	}, 1500)
});