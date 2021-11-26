import { useReducer } from "react";

import CartContext from "./CartContext";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {

  }

  if (action.type === "REMOVE") {
  }

  if (action.type === "CLEAR") {
    return initialCartState;
  }

  return initialCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, initialCartState);

  const addItemHandler = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchAction({ type: "CLEAR" });
  };

  const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      clearItems: clearCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
