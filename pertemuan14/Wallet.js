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
    // amount harus angka dan lebih besar dari 0 dan lebih kecil dari saldo
    const validAmount = !isNaN(amount) && amount < this.balance && amount > 0;
    const isPiCorrect = pin === 123456;

    if (!isPiCorrect) {
      alert("Pin Salah, Silahkan masukkan pin yang benar");
      return;
    }

    if (validAmount) {
      alert("Saldo tidak cukup, Silahkan top up");
      return;
    }

    if (validAmount && isPiCorrect) {
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
