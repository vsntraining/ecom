import React from 'react';
import NavBar from './app/components/NavBar';
import ProductList from './app/components/ProductList';
import ProductDetails from './app/components/ProductDetails';
import Cart from './app/components/Cart';

function App() {
  const productsArray = [
  {title: "Product1", details: "Product details 1", id: "1"},
  {title: "Product2", details: "Product details 2", id: "2"},
  {title: "Product3", details: "Product details 3", id: "3"}
];

console.log(productsArray);
  return (
    <div className="App">
      <NavBar/>
      <ProductList>
        <ProductDetails products={productsArray}/>
        
      </ProductList>
      <Cart/>
    </div>
  );
}

export default App;
