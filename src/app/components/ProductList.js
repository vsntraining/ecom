import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (products.map((item, index) => {
    return <Product 
              title={item.title}
              detail={item.details} 
              key={item.id} />;
  }))
};

export default ProductList;
