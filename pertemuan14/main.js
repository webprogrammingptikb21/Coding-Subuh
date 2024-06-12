// cara buat object product dan cart
const keranjang = new Cart();

// buat object wallet dengan saldo awal 10 rb
const dana = new Wallet(10000);

const iphone = new Product("iphone 15 pro max", "33000000", "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg");

const vivo = new Product("Vivo v23 E", "4000000", "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23e.jpg");

// tambahkan iphone ke keranjang
keranjang.addItem(iphone);

// topup
dana.topUp(5000000);
console.log(dana.getCurrentBalanceIDR());
