import React, {useState} from 'react';
import NavBar from './app/components/NavBar';
import ProductList from './app/components/ProductList';
import ProductDetails from './app/components/ProductDetails';
import Cart from './app/components/Cart';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  const productsArray = [
  {title: "Product1", details: "Product details 1", id: "1", inCart: false},
  {title: "Product2", details: "Product details 2", id: "2", inCart: false},
  {title: "Product3", details: "Product details 3", id: "3", inCart: false}
];
const [count, setCount] = useState(0);

const updateCount = () => {
setCount(count+1);

}

  return (
    <div className="container mx-auto p-1">
      <NavBar inCartCount={count} />
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
            <ProductList products={productsArray} updateCount={updateCount}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
