import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const totalAmount = (props.amount * props.price).toFixed(2);
  const price = props.price.toFixed(2);

  const addItem = () => {
    props.onAdd({
      id: props.id,
      title: props.title,
      price: props.price,
      amount: 1,
      image: props.image,
    });
  };

  const removeItem = () => {
    props.onRemove(props.id);
  };

  const itemClasses = `${classes.item} ${
    props.lastItem ? classes.lastItem : ""
  }`;

  return (
    <li className={itemClasses}>
      <img src={props.image} alt="item product display" />
      <div className={classes.itemContent}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.itemContentAction}>
        <p>S${price}</p>
        <h4>S${totalAmount}</h4>
        <div className={classes.buttons}>
          <button onClick={removeItem}>-</button>
          <p>{props.amount}</p>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
