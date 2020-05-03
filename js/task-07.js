'use strict';

console.log('=================== task-7 ======================');

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let transaction = {};

const account = {
  balance: 0,

  TransactionID: 123456789,

  transactions: [],

  deposit(amount) {
    this.balance += Number(amount);
    this.addTransaction(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        'Суммы на вашем счету недостаточно для осуществления операции.'
      );
    } else {
      this.balance -= Number(amount);
      this.addTransaction(transaction);
    }
  },

  createTransaction(amount, type) {
    this.TransactionID += Number(amount);
    transaction = {
      type: Transaction.WITHDRAW,
      amount: amount,
      id: this.TransactionID,
    };
    return transaction;
  },

  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  getBalance() {
    console.log(`Баланс на счету: ${this.balance}`);
  },

  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id == id) {
        console.log(item);
        return;
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
      if (type === item.type) {
        total += item.amount;
      }
    }
    return console.log(`${type} : ${total}`);
  },
};

// Проверка методоа обьекта account

account.deposit(10000);

account.withdraw(7000);

account.getBalance();

account.getTransactionDetails(123322987);

account.deposit(20000);

account.getBalance();

account.withdraw(30000);

account.getBalance();

account.getTransactionTotal('withdraw');

console.table(account.transactions);
