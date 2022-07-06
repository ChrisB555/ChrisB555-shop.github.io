import React, { createContext } from "react";
import faker from "Faker";
import { useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import { useContext } from "react";

const Cart = createContext();
faker.seed(99);
const ContextProvider = (props) => {
  const products = [...Array(25)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuerry: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {props.children}
    </Cart.Provider>
  );
};
export { Cart, ContextProvider };

export const CartState = () => {
  return useContext(Cart);
};
