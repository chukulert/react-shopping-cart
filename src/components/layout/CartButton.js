import classes from "./CartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const totalCartItems = items.reduce((curTotal, item) => {
    return curTotal + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
