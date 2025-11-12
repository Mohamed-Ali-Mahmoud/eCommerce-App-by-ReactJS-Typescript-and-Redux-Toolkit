// import useEffect from react
import { useEffect } from "react";

// import useParams() from react-router-dom
import { useParams } from "react-router-dom";
// import actions from products slice
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";

// import hooks
import { useAppDispatch, useAppSelector } from "@store/hooks";

// import Product component (product page)
import Product from "@components/Product/Product";

const Products = () => {
  // get the category prefix from the url
  const params = useParams();

  // get the dispatch function from the store
  const dispatch = useAppDispatch();

  // get products state from the store
  const { records, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    // dispatch the action to get products by category prefix
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      // clean up products state
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]); // dependency array

  // get the products list
  const productsList =
    records.length > 0
      ? records.map((record) => <Product key={record.id} {...record} />)
      : "No Products Found";

  return (
    <div className="grid grid-cols-4 gap-20  max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-5">
      {productsList}
    </div>
  );
};

export default Products;
