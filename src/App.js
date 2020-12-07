import React from 'react';
import NavBar from './app/components/NavBar';
import ProductList from './app/components/ProductList';
import ProductDetails from './app/components/ProductDetails';
import Cart from './app/components/Cart';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  const productsArray = [
  {title: "Product1", details: "Product details 1", id: "1"},
  {title: "Product2", details: "Product details 2", id: "2"},
  {title: "Product3", details: "Product details 3", id: "3"}
];

  return (
    <div className="container mx-auto p-4">
      <NavBar/>
      <Router>
        <Switch>
          <Route path="/home">
            <ProductList products={productsArray} />
          </Route>
          <Route path="/details">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Cart/>
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
