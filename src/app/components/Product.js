import React, {useState} from "react";

const Product = ({ title, detail, inCart, updateCount }) => {

  const[isInCart, setIsInCart] = useState(inCart);
  const handleAddToCart = () => {
    setIsInCart(true);
    updateCount();

  }
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center ">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src="../img/logo.png" alt="Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-gray-500">{detail}</p>
      </div>
      <div>
        {isInCart ? <span>In Cart</span> : <button onClick={handleAddToCart}>Add to Cart</button>}
      </div>
    </div>
  );
};

export default Product;
