// let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
    this.transactions;
  }

  get balance() {
    let balance = 0;
    for (const transaction of this.transactions) {
      balance += transaction.value;
    }
    return balance;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (this.isAllowed() === false) {
      console.log("NOT ALLOWED: ", this);
      return false;
    } else {
      this.time = new Date();
      this.account.addTransaction(this);
    }
  }
}
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

  isAllowed() {
    return this.account.balance - this.amount >= 0;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
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

const t4 = new Withdrawal(20.00, myAccount);
t4.commit();

console.log("getting my balance", myAccount.balance);
