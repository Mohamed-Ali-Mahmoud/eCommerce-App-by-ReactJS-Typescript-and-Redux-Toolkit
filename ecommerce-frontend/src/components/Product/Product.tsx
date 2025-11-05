import React from "react";

const Product = () => {
  return (
    <div className="container mx-auto mt-10 flex justify-center items-center flex-col">
      <img
        src="https://www.mytheresa.com/media/1094/1238/100/ef/P00956935.jpg"
        alt="Sample Product"
        className="w-full rounded-2xl shadow-md  object-cover"
      />
      <div className="self-start">
        <h4 className="text-2xl font-bold mt-4">Titlte</h4>
        <p className="text-gray-700 mt-2">$29.99</p>
      </div>
      <button className="w-full mt-4 bg-cyan-400 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300 cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
