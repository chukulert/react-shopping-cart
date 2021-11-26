import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";

import CartItem from "./CartItem";
import CartModal from "./CartModal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          image={item.image}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  console.log(cartItems)


  return (
    <div>
      <CartModal closeCart={props.closeCart}>{cartItems}</CartModal>
    </div>
  );
};

export default Cart;

// id: props.id,
// title: props.title,
// price: props.price,
// amount: currentAmount,
// image: props.image
