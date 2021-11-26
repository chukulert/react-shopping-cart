import { useContext, useRef } from "react";

import CartContext from "../../store/CartContext";
import Card from "../UI/Card";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const currentAmount = amountInputRef.current.value;

    cartCtx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      amount: +currentAmount,
      image: props.image
    });
  };

  return (
    <Card>
      <div>
        <img src={props.image} />
        <h4>S$ {props.price}</h4>
        <h3>{props.title}</h3>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <input className={classes.input}
          ref={amountInputRef}
          label="Amount"
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
        <button className={classes.btn}>Add to Cart</button>
      </form>
    </Card>
  );
};

export default ProductItem;
