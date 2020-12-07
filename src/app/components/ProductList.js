import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => (
  <div className="flex flex-wrap gap-4">
    {products.map((item, index) => {
      return <Product title={item.title} detail={item.details} key={item.id} />;
    })}
  </div>
);
export default ProductList;
