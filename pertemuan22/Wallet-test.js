import { test, expect } from "vitest";
import Wallet from "./Wallet.js";

test("test buat object wallet", () => {
  const dompet = new Wallet(1000);
  expect(dompet).toBeInstanceOf(Wallet);
});
