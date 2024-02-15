import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  private loan: number = 0;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  getLoan = (): number => {
    return this.loan;
  };

  setLoan = (loanValue: number): string => {
    if (this.getStatus() && loanValue > 0) {
      this.setBalance(this.getBalance() + loanValue);
      this.loan += loanValue;
      return "Voce pegou um empréstimo";
    }
    return "Valor invalido";
  };
}
