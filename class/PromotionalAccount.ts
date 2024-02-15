import { DioAccount } from "./DioAccount";

export class PromotionalAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (depositAmount: number): string => {
    if (this.getStatus() && depositAmount > 0) {
      this.setBalance(this.getBalance() + depositAmount + 10);
      return "Voce depositou";
    }
    return "Valor invalido.";
  };
}
