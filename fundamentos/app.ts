class User {
	name: string = 'João'
	age: number = 36

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	showName = () => {
		console.log(this.name)
	}
}

const user = new User('João', 36);
user.showName();

const otherUser = new User('Denize', 37);
otherUser.showName();