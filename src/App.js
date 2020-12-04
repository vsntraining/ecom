import React from "react";
import NavBar from "./app/components/NavBar";
import ProductList from "./app/components/ProductList";
import ProductDetails from "./app/components/ProductDetails";
import Cart from "./app/components/Cart";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const productsArray = [
    { title: "Product-1", details: "P1 Details", id: 1 },
    { title: "Product-2", details: "P2 Lorem ipsum", id: 2 },
  ];
  return (
    <div className="md:container md:mx-auto p-4">
      <NavBar />
      <Router>
        <Switch>
          <Route path="/home">
            <ProductList products={productsArray} />
          </Route>
          <Route path="/details">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <ProductList products={productsArray} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
