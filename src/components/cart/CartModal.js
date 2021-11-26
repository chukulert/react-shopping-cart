import React from "react";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
  return (
    <React.Fragment>
    <div className={classes.modalBackdrop} onClick={props.closeCart}></div>
      <div className={classes.modal}>{props.children}</div>
      <button onClick={props.closeCart}>X</button>
      </React.Fragment>
  );
};

export default CartModal;
