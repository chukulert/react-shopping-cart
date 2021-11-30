import { useReducer } from "react";

import CartContext from "./CartContext";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log(action);
  if (action.type === "ADD") {
    const updatedTotalAmount = +(
      state.totalAmount +
      action.item.price * action.item.amount
    ).toFixed(2);
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      console.log(existingCartItem.amount);
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItem = state.items.find((item) => item.id === action.id);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedTotalAmount = +(
      state.totalAmount - existingCartItem.price
    ).toFixed(2);
    let updatedItems = [...state.items];
    if (existingCartItem.amount !== 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
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
    clearItems: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
