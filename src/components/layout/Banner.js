import { Link } from "react-router-dom";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.container}>
        <h1>Flash Sale Today</h1>
        <p>Free gift with purchase</p>
        <Link to="/shopping-cart/products">Shop Now!</Link>
      </div>
    </div>
  );
};

export default Banner;
