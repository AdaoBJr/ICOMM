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
