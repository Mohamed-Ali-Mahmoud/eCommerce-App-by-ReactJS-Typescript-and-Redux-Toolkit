// import product types
import type { TProduct } from "@customTypes/product";

const Product = ({ title, price, img }: TProduct) => {
  return (
    <div className="container mx-auto mt-10 flex justify-center items-center flex-col mb-5">
      <div className="w-1"></div>
      <img
        src={img}
        alt={title}
        className="w-[200px] h-[200px] rounded-2xl shadow-md object-cover"
      />
      <div className="self-start">
        <h4 className="text-2xl font-bold mt-4 truncate">{title}</h4>
        <p className="text-gray-700 mt-2">{price} EGP</p>
      </div>
      <button className="w-full mt-4 bg-cyan-400 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300 cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
