class WishListStorage {
  constructor(keyName = "wishlist") {
    this.key = keyName;
  }

  getAll() {
    // ambil data dari local storage convert menjadi object, jika null maka return array kosong
    return JSON.parse(localStorage.getItem(this.key)) ?? [];
  }

  add(product) {
    //ambil dlu semua data product di wishlist
    const dataWishList = this.getAll();

    // tambahkan data baru ke dalam array
    dataWishList.push(product);

    // simpan array yang udah diupdate ke dalam localstorage
    this.#save(dataWishList);
  }

  remove(productId) {
    // ambil dulu semua data  dari localstorage
    const dataWishList = this.getAll();

    // lalu kita hapus product yang ada di dalam array data wishlist
    const newData = dataWishList.filter((product) => product.id != productId);
    this.$save(newData);
  }

  //   buuat simpan data ke localstorage
  #save(newProductData) {
    const newProductDataJson = JSON.stringify(newProductData);
    localStorage.setItem(this.key, newProductDataJson);
  }

  isInWishList(productId) {
    const dataWishList = this.getAll();
    return dataWishList.some((product) => product.id == productId);
  }

  count() {
    return this.getAll().length;
  }
}
