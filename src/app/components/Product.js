import React, { useState } from "react";

const Product = ({ title, detail, inCart, updateCount }) => {
  
  const [isInCart, setIsInCart] = useState(inCart);

  const handleAddToCart = () => {
    setIsInCart(true);
    updateCount();
  };

  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">{title}</div>
          <p className="text-gray-500">{detail}</p>
        </div>
      </div>
      <div>
        {isInCart ? (
          <span className="bg-blue-500 text-white p-1">In Cart</span>
        ) : (
          <button className="bg-blue-500 text-white p-1" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
