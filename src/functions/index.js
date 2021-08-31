// HELPERS ---------------------------------------------------------------------------------

// SET / GET LOCALSTORAGE
export const setStorage = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value)));

export const getStorage = (key, value = []) => (
  JSON.parse(localStorage.getItem(key)) || value);

// FUNÇÃO DE REMOÇÃO
export const removeItem = (id, arrayData) => {
  const removedItem = arrayData.filter((item) => item.id !== id);
  setStorage('LScart', removedItem);
  return removedItem;
};

// VIEW QUANTIDADE DE PRODUTOS EM ESTOQUE
export const showQty = (id, cart) => {
  if (id) {
    const product = cart.filter((c) => c.id === id)[0];
    const qty = (product) ? product.count : 0;
    return qty;
  }
  const qty = cart.reduce((acc, currValue) => acc + currValue.count, 0);
  return qty;
};

// ----------------------------------------------------------------------------------------------
// SET FAVORITOS

export const Fav = (products, id) => {
  const Products = [...products];

  const findProd = Products.find((item) => item.id === id);
  const key = Products.indexOf(findProd);
  Products[key].favorited = !Products[key].favorited;

  setStorage('LSprod', Products);
  return Products;
};

// ----------------------------------------------------------------------------------------------
// CARRINHO DE COMPRAS

// ADD, REMOVE, UPDATE CART
export const CarT = (product, cart) => {
  const {
    id, msg, favorited, image, title, price, parcel,
  } = product;
  const findProduct = cart.find((item) => item.id === product.id);
  if (!cart.length || !findProduct) {
    const productCart = [...cart, {
      id, msg, favorited, image, title, price, parcel, count: 1, totalValue: price,
    }];
    setStorage('LScart', productCart);
    return productCart;
  }
  const productCart = [...cart];
  const key = productCart.indexOf(findProduct);

  productCart[key].count += 1;
  productCart[key].totalValue = Math.round((productCart[key].count
      * productCart[key].price) * 100) / 100;

  setStorage('LScart', productCart);
  return productCart;
};

// TOTAL VALUE CART
export const sumCart = (cart) => {
  const total = cart.reduce((acc, currCart) => acc + currCart.totalValue, 0);
  const totalCarT = Math.round((total) * 100) / 100;
  setStorage('LScartSum', totalCarT);
  return totalCarT;
};

// ----------------------------------------------------------------------------------------------
