import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);

  let modalContent;

  if (cartCtx.items.length) {
    modalContent = (
      <div>
        <div className={classes.modalContent}>{props.children}</div>
        <div className={classes.modalBtn}>
          <button className={classes.checkoutEmptyBtn} onClick={props.clearCart}>Empty Cart</button>
          <button className={classes.checkoutEmptyBtn}>Checkout</button>
        </div>
      </div>
    );
  } else {
    modalContent = <h2>You have no items in your cart.</h2>;
  }

  return (
    <React.Fragment>
      <div className={classes.modalBackdrop} onClick={props.closeCart}></div>
      <div>
        <div className={classes.modal}>
          <h2>Your Cart</h2>
          <button onClick={props.closeCart} className={classes.closeModalBtn}>
            X
          </button>
          {modalContent}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartModal;
