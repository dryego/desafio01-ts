import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PromotionalAccount } from "./class/PromotionalAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
const promotionalAccount: PromotionalAccount = new PromotionalAccount(
  "Dryego",
  30
);

console.log(peopleAccount.deposit(200));
console.log(companyAccount.deposit(200));
console.log(promotionalAccount.deposit(200));

console.log(peopleAccount.withdraw(100));
console.log(companyAccount.withdraw(50));

console.log(companyAccount.setLoan(1000));
console.log(companyAccount.getLoan());

console.log(peopleAccount);
console.log(companyAccount);
console.log(promotionalAccount);
