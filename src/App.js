import "./App.css";
import React from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import MainPage from "./Components/MainPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProceedToCheckout from "./Components/ProceedToCheckout";
import Checkout from "./Components/Checkout";
import SingleProductDetails from "./Components/SingleProductDetails";
import Women from "./Components/Women/Women";
import Men from "./Components/Men/Men";
import Kids from "./Components/Kids/Kids";
import Babies from "./Components/Babies/Babies";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/ProceedToCheckout" exact>
          <ProceedToCheckout />
        </Route>
        <Route path="/Checkout" exact>
          <Checkout />
        </Route>
        <Route path="/Products/:productId" exact>
          <SingleProductDetails />
        </Route>
        <Route path="/Products" exact>
          <Products />
        </Route>
        <Route path="/Women" exact>
          <Women />
        </Route>
        <Route path="/Men" exact>
          <Men />
        </Route>
        <Route path="/Kids" exact>
          <Kids />
        </Route>
        <Route path="/Babies" exact>
          <Babies />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
