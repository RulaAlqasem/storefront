import axios from "axios";

let initialState = {
  cart: [],
  count: 0,
  show: false,
  g: 0
};
let newCart;
let newCart2;
export default function CategoriesReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":

      if (payload.inStock <= 0) {
        alert("there is no more from this product")

      }

      else if (!state.cart.includes(payload) && payload.inStock > 0) {
        payload.cart = 1

        state.cart = [...state.cart, payload];

        payload.inStock--
        state.count += 1;
      }

      else {
        newCart = [...state.cart]
        payload.cart++
        payload.inStock--
      }


      return { cart: state.cart, count: state.count, show: true, };


    case "REMOVE_FROM_CART":
      payload.cart--
      payload.inStock++
      if (payload.cart === 0) {
        newCart2 = state.cart.filter((p) => p !== payload);

      }
      else { newCart2 = [...state.cart] }
      return {
        cart: newCart2,
        count: state.count - 1,

      };

    case "REMOVE":
      payload.inStock = payload.inStock + payload.cart
      payload.cart = 0
      let c = state.cart.filter((p) => p !== payload)

      let count1 = state.count - 1
      return {
        cart: c,
        count: count1

      };

    default: return state;
  }
}



export const addToCart = (name) => async (dispatch, getState) => {

  return await axios({
    method: 'put',
    url: `https://api-js401.herokuapp.com/api/v1/products/${name._id}`,
    data: name,
  })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: "ADD_TO_CART",
        payload: name,
      });
    });
}

export const removeFromCart = (name) => async (dispatch, getState) => {

  return await axios({
    method: 'put',
    url: `https://api-js401.herokuapp.com/api/v1/products/${name._id}`,
    data: name,
  })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: name,
      });
    });
}


export const remove = (name) => async (dispatch, getState) => {

  return await axios({
    method: 'put',
    url: `https://api-js401.herokuapp.com/api/v1/products/${name._id}`,
    data: name,
  })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: "REMOVE",
        payload: name,
      });
    });
}