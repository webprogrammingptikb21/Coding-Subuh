const BASE_URL = "https://fakestoreapi.com/products";

const API = {
  getAllProducts: async function () {
    const response = await fetch(`${BASE_URL}/products/`);
    const products = await response.json();
    return products;
  },
  getProduct: async () => {
    const response = await fetch(`${BASE_URL}/products/${product}`);
    const product = await response.json();
    return product;
  },
};
