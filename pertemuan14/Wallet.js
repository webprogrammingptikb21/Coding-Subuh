class Wallet {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  topUp(amount) {
    if (amount < 0 && isNaN(amount)) {
      console.error("Jumlah TopUp salah");
      return;
    }

    this.balance += amount;
  }
  widthDraw(amount) {
    if (isNaN(amount) && amount > this.balance && amount < 0) {
      console.error("Jumlah Penarikan Salah");
      return;
    }
    this.balance -= amount;
  }
  pay(amount) {
    const pin = Number(prompt("inputkan PIN"));
    const isValidAmount = isNaN(amount) && amount > this.balance && amount < 0;
    const isPiCorrect = pin === 123456;

    if (!isValidAmount) {
      alert("Saldo tidak cukup, Silahkan top up");
      return;
    }

    if (isValidAmount && isPiCorrect) {
      this.balance -= amount;
    }
  }
  getCurrentBalance() {
    return this.balance;
  }
  getCurrentBalanceIDR() {
    return this.balance.toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    });
  }
}
