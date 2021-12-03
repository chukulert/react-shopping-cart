import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";

import classes from "./NavigationBar.module.css";

const NavigationBar = (props) => {


  return (
    <header className={classes.header}>
      <div className={classes.logo}>Shopping Cart</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/shopping-cart" exact activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopping-cart/products" activeClassName={classes.active}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopping-cart/about" activeClassName={classes.active}>
              About
            </NavLink>
          </li>
          <li>
            <CartButton onClick={props.showCart}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
