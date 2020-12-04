import React from "react";
import NavBar from "./app/components/NavBar";
import ProductList from "./app/components/ProductList";
import ProductDetails from "./app/components/ProductDetails";
import Cart from "./app/components/Cart";

function App() {
  const productsArray = [
    { title: "Product-1", details: "P1 Details", id: 1 },
    { title: "Product-2", details: "P2 Lorem ipsum", id: 2 },
  ];

  return (
    <div className="App">
      <NavBar />
      <ProductList products={productsArray} />
      <ProductDetails />
      <Cart />
    </div>
  );
}

export default App;
