import React, {useState} from "react";
import NavBar from "./app/components/NavBar";
import ProductList from "./app/components/ProductList";
import ProductDetails from "./app/components/ProductDetails";
import Cart from "./app/components/Cart";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const productsArray = [
    { title: "Product-1", details: "P1 Details", id: 1 , incart:false},
    { title: "Product-2", details: "P2 Lorem ipsum", id: 2 , incart:false },
    { title: "Product-3", details: "P3 Lorem ipsum", id: 3 , incart:false },
  ];

  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="md:container md:mx-auto p-4">
      <NavBar inCartCount={count}/>
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
            <ProductList products={productsArray} updateCount={updateCount}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;