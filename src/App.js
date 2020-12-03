import React from "react";
import NavBar from "./app/components/NavBar";
import Product from "./app/components/Product";
import ProductList from "./app/components/ProductList";

function App() {
  const productsArray = [
    { title: "Product-1", details: "P1 Details", id: 1 },
    { title: "Product-2", details: "P2 Lorem ipsum", id: 2 },
  ];

  return (
    <div className="App">
      <NavBar />
      <ProductList>
        {productsArray.map((item, index) => {
          return (
            <Product title={item.title} detail={item.details} key={item.id} />
          );
        })}
      </ProductList>
    </div>
  );
}

export default App;
