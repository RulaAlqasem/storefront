import axios from 'axios';


let initialState = {
  productsList: [],
  products: [],
}

let newProducts

export default function ProductsReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "LOAD_PRODUCTS":
      console.log(payload.results);
      return {
        productList: payload.results,
        products: []
      }

    case "FILTER_PRODUCTS":
      let newProductList = state.productList;
      newProducts = newProductList.filter(product => product.category === payload);
      return { products: newProducts, productList: state.productList };


    default: return state;
  };
}

export const loadProducts = () => (dispatch, getState) => {
  return axios.get('https://api-js401.herokuapp.com/api/v1/products')
    .then(response => {
      dispatch({
        type: 'LOAD_PRODUCTS',
        payload: response.data
      });
    });
}

export function switchProducts(name) {
  return {
    type: "FILTER_PRODUCTS",
    payload: name,
  };
}