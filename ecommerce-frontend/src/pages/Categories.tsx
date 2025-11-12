import { useEffect } from "react";
import Category from "@components/Category/Category";

// import appUseDispatch and useAppSelector from @store.hooks
import { useAppDispatch, useAppSelector } from "@store/hooks";

// import actGetCategories
import actGetCategories from "@store/categories/act/actGetCategories";

const Categories = () => {
  // get dispatch function
  const dispatch = useAppDispatch();

  // get loading, error, records from categories state
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  // use useEffect to dispatch actGetCategories when the component mounts
  useEffect(() => {
    //
    if (records.length === 0) {
      dispatch(actGetCategories());
    }
  }, [dispatch]);

  // get categories list
  const categoriesList = records
    ? records.map((record) => <Category key={record.id} {...record} />)
    : "No Categories Available";

  return (
    <div className="grid grid-cols-5 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-5">
      {categoriesList}
    </div>
  );
};

export default Categories;
