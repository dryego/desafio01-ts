export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  deposit = (depositAmount: number): string => {
    if (this.validateStatus() && depositAmount > 0) {
      this.balance += depositAmount;
      return "Voce depositou";
    }
    return "Valor invalido.";
  };

  withdraw = (withdrawalValue: number): string => {
    switch (true) {
      case !this.validateStatus():
        return "Conta invalida.";
        break;
      case withdrawalValue > this.balance:
        return "Saudo insuficiente.";
        break;
      case withdrawalValue === 0:
        return "Valor invalido.";
        break;
      default:
        this.balance -= withdrawalValue;
        return "Você sacou.";
        break;
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (newBalance: number): void => {
    this.balance = newBalance;
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };

  getStatus = (): boolean => {
    return this.status;
  };
}
