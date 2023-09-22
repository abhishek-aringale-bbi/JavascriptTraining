class Bank {
  #accounts = [];
  id = 0;
  constructor(bankName, accounts = []) {
    this.bankName = bankName;
    this.#accounts = accounts;
    this.accoNo = 0;
  }

  createAccount(accountHolderName) {
    1;
    this.accoNo++;
    let accountNo = this.accoNo;
    console.log(accountNo);
    this.id++;
    // console.log(this.id);
    // let account = {
    //   accountNo: { accHolderName: accountHolderName },
    // };
    let account = {};
    account.accountNo = { accHolderName: accountHolderName };
    this.#accounts.push(account);
    console.log(this.#accounts);
  }

  getAccountDetails(accountNumber) {
    // let ct = 0,
    //   pos;
    // this.#accounts.forEach(function (ele) {
    //   if (ele.UniqueAccountNumber === accountNumber) {
    //     pos = ct;
    //   }
    //   console.log(pos);
    //   ct++;
    // });
  }
}

class Account extends Bank {
  constructor(
    bankName,
    // accounts,
    accountNumber,
    accountHolderName,
    balance = 0
  ) {
    super(bankName);
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(this.balance);
  }
  withdraw(amount) {
    this.balance -= amount;
    console.log(this.balance);
  }
}

const b1 = new Bank("A");
b1.createAccount("abhi");
b1.createAccount("xyz");
