const BankAccount = require('./BankAccount')
const SavingsAccount =require('./SavingsAccount')

// Criando instâncias
const johnAccount = new BankAccount("John");
const maryAccount = new SavingsAccount("Mary", 1.5);

// Operações com a conta de John
johnAccount.deposit(500);
johnAccount.deposit(1000);
johnAccount.withdraw(300);

// Operações com a conta de Mary
maryAccount.deposit(2000);
maryAccount.applyInterest();
maryAccount.withdraw(500);