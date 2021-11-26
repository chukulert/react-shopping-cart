import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";

import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import CartProvider from "./store/CartProvider";
import Cart from "./components/cart/Cart";
import NavigationBar from "./components/layout/NavigationBar";

function App() {
  const [showCart, setShowCart]= useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const closeCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      <NavigationBar showCart={showCartHandler}/>
      {showCart && <Cart closeCart={closeCartHandler}/>}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/shopping-cart" />
        </Route>
        <Route path="/shopping-cart" exact>
          <LandingPage />
        </Route>
        <Route path="/shopping-cart/products">
          <ProductPage />
        </Route>
        <Route path="/shopping-cart/contact">
          <ContactPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
