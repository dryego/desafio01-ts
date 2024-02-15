import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);

console.log(peopleAccount.deposit(200));
console.log(companyAccount.deposit(200));

console.log(peopleAccount.withdraw(100));
console.log(companyAccount.withdraw(50));

console.log(peopleAccount);
console.log(companyAccount);
