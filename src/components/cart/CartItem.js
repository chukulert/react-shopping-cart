
import classes from './CartItem.module.css';

const CartItem = (props) => {

    const totalAmount = (props.amount * props.price).toFixed(2);

    return (
        <li>
            <img src={props.image} />
            <h3>{props.title}</h3>
            <div>
                <span>S$ {props.price}</span>
                <span>x {props.amount}</span>
            </div>
            <p>S$ {totalAmount}</p>
            <div>
            <button onClick={props.onAdd}>+</button>
            <button onClick={props.onRemove}>-</button>
            </div>
        </li>
    )
}

export default CartItem;


// id: props.id,
// title: props.title,
// price: props.price,
// amount: currentAmount,
// image: props.image