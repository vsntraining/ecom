import React from "react";
import Product from "./Product";

const ProductList = ({ products, updateCount }) => (
  <div className="flex md:flex-row space-x-4">
    {products.map((item, index) => {
      return (
        <Product
          title={item.title}
          detail={item.details}
          key={item.id}
          updateCount={updateCount}
        />
      );
    })}
  </div>
);

export default ProductList;
