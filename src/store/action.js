export const switchCategory = (name) => {
  return {
    type: 'SWITCH_ACTIVE_CATEGORY',
    payload: name,
  };
};

export function switchProducts(name) {
  return {
    type: "FILTER_PRODUCTS",
    payload: name,
  }
}


export function addToCart(name) {
  return {
    type: "ADD_TO_CART",
    payload: name,
  }
}
export function removeFromCart(name) {
  return {
    type: "REMOVE_FROM_CART",
    payload: name,
  }
}
export function remove(name) {
  return {
    type: "REMOVE",
    payload: name,
  }
}