// let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
    this.transactions;
  }

  getBalance() {
    for (const transaction of this.transactions) {
      this.balance += transaction.amount;
    }
    return this.balance;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.amount = this.value;
    this.time = new Date();
    this.account.addTransaction(this);
  }
}
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
}

const myAccount = new Account("snow-patrol");


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const t1 = new Withdrawal(50.25, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);

const t2 = new Withdrawal(9.99, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', balance);

const t3 = new Deposit(120.00, myAccount);
t3.commit();
// console.log('Transaction 3:', t3);

console.log("getting my balance", myAccount.getBalance());
