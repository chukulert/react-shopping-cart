import classes from "./CartModal.module.css";

const CartModal = (props) => {
  return (
    <div className={classes.modalBackdrop} onClick={props.closeCart}>
      <div className={classes.modal}>{props.children}</div>
      <button onClick={props.closeCart}>X</button>
    </div>
  );
};

export default CartModal;
