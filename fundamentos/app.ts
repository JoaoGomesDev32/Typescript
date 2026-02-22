//Dio banking

//name, accountNumber
//depositar, sacar

class Account {
	name: string
	accountNumber: number

	constructor(name: string, accountNumber: number) {
		this.name = name
		this.accountNumber = accountNumber
	}

	deposit = () => {
		console.log('Você depositou');
	}

	withdraw = () => {
		console.log('Você sacou');
	}
}

const newAccount: Account = new Account('João', 1);
console.log(newAccount);

const account: Account = new Account('Denize', 28)
account.deposit();


/*class User {
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

const user: User = new User('João', 36);
user.showName();

const otherUser = new User('Denize', 37);
otherUser.showName();
*/