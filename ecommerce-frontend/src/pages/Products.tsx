import Product from "@components/Product/Product";
const Products = () => {
  return (
    <div className="grid grid-cols-4 gap-20  max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-5">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;
