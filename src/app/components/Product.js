import React, { useState } from "react";

const Product = ({ title, detail, inCart, updateCount }) => {
  const [isInCart, setIsInCart] = useState(inCart);
  const handleAddToCart = () => {
    setIsInCart(true);
    updateCount();
  };
  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center ">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/img/logo.png" alt="Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">{title}</div>
          <p className="text-gray-500">{detail}</p>
        </div>
        <div className="relative -right-7 -bottom-7 text-sm p-3">
        {isInCart ? (
          <span className=" bg-gray-500 p-1 rounded-full text-white ">In Cart</span>
        ) : (
          <button
            className=" bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white "
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
      </div>

    </div>
  );
};

export default Product;
