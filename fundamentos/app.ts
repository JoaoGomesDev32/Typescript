import { CompanyAccount } from './class/CompanyAccount.ts';
import { PeopleAccount } from './class/PeopleAccount.ts';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'João', 10);
console.log(peopleAccount);
peopleAccount.deposit();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit();
console.log(companyAccount);