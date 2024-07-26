// membuat custom class yang diturunkan dari class error
class BalanceError extends Error {
  constructor(message) {
    super(message);
    this.name = "BalanceError";
  }
}

//   membuat class wallet yang akan menggunakan custom class error
class Wallet {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }
  topUp(amount) {
    if (amount < 0 || isNaN(amount)) {
      throw new BalanceError("Upz! jumlah topup salah");
    }
    this.balance += amount;
  }

  withDraw(amount) {
    if (amount < 0 || isNaN(amount) || amount > this.balance) {
      throw new BalanceError("Upz Jumlah saldo yang mau ditarik  salah");
    }

    this.balance -= amount;
  }
}

//   membuat object wallet
const dompet = new Wallet(10000);

try {
  dompet.topUp(-888);
} catch (error) {
  if (error instanceof BalanceError) {
    alert("waduh, ini eror karena saldo salah");
  } else {
    console.log("Error", error.message);
  }
}

// export class supaya bisa diimport di file lain
exports = { Wallet, BalanceError };
