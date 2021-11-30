import { useContext } from "react";
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

  const clearCartHandler = () => {
    cartCtx.clearItems()
  }

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          image={item.image}
          onAdd={cartItemAddHandler}
          onRemove={cartItemRemoveHandler}
        />
      ))}
    </ul>
  );

  return (
    <div>
      <CartModal closeCart={props.closeCart} clearCart={clearCartHandler}>{cartItems}</CartModal>
    </div>
  );
};

export default Cart;

// id: props.id,
// title: props.title,
// price: props.price,
// amount: currentAmount,
// image: props.image
