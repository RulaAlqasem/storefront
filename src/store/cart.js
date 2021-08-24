let initialState = {
  cart: [],
  count: 0,
  show: false,
};
let newCart;
let newCart2;
export default function CategoriesReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":

      if (!state.cart.includes(payload)) {
        payload.count++
        newCart = [...state.cart, payload];
        payload.inStock--

      }
      else if (payload.inStock == 0) {
        alert("there is no more from this product")
      }
      else {
        newCart = [...state.cart]
        payload.count++
        payload.inStock--
      }
      const count = state.count + 1;

      return { cart: newCart, count, show: true, };

    case "REMOVE_FROM_CART":
      payload.count--
      payload.inStock++
      if (payload.count === 0) {
        newCart2 = state.cart.filter((p) => p !== payload);

      }
      else { newCart2 = [...state.cart] }
      return {
        cart: newCart2,
        count: state.count - 1,

      };

    case "REMOVE":
      payload.inStock = payload.inStock + payload.count
      payload.count = 0
      let c = state.cart.filter((p) => p !== payload)

      let count1 = state.count - 1
      return {
        cart: c,
        count: count1

      };

    default: return state;
  }
}