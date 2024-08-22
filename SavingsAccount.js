const BankAccount = require('./BankAccount')

class SavingsAccount extends BankAccount {
    constructor(accountHolder, interestRate) {
        super(accountHolder);
        this.interestRate = interestRate;
    }

    applyInterest() {
        const interest = this.balance * (this.interestRate / 100);
        this.balance += interest;
        console.log(`Saldo total de ${this.accountHolder}: R$${this.balance.toFixed(2)}.00 | Aplicado ${this.interestRate}% de juros`);
        console.log(`Novo saldo total: R$${this.balance.toFixed(2)}.00`);
    }
}

module.exports = SavingsAccount