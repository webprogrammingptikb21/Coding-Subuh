const boostrap = require("bootstrap");

import { Wallet } from "./Wallet.js";
const dompet = new Wallet(1000);
console.log(dompet.balance);
