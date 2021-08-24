let productList = [
  {
    name: 'keyboard',
    category: 'electronics',
    description: 'Typing Device',
    price: 5,
    inStock: 10,
    count: 0
  },
  {
    name: 'Mouse',
    category: 'electronics',
    description: 'Mousing Device',
    price: 10,
    inStock: 5,
    count: 0
  },
  {
    name: 'Kumquats',
    category: 'food',
    description: 'Delicious',
    price: 20,
    inStock: 2,
    count: 0
  },
  {
    name: 'Kiwi',
    category: 'food',
    description: 'yummiiii',
    price: 3,
    inStock: 7,
    count: 0
  },
]

let initialState = {
  products: [],
}

let newProducts

export default function ProductsReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "FILTER_PRODUCTS":
      newProducts = productList.filter(product => product.category === payload);

      return { products: newProducts };
    default: return state;
  }
}

