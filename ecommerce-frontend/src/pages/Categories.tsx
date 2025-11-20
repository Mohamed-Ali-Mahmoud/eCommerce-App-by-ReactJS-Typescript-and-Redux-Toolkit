import { useEffect } from "react";

// import Category component
import Category from "@components/Category/Category";

// import appUseDispatch and useAppSelector from @store.hooks
import { useAppDispatch, useAppSelector } from "@store/hooks";

// import actGetCategories
import actGetCategories from "@store/categories/act/actGetCategories";

// import Loading component
import Loading from "@components/feedback/Loading";

// import GridList component
import GridList from "@components/common/GridList/GridList";

const Categories = () => {
  // get dispatch function
  const dispatch = useAppDispatch();

  // get loading, error, records from categories state
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  // use useEffect to dispatch actGetCategories when the component mounts
  useEffect(() => {
    // dispatch actGetCategories only if records is empty
    // to avoid multiple requests.
    if (records.length === 0) {
      dispatch(actGetCategories());
    }
  }, [dispatch]);

  // get the categories list
  // const categoriesList =
  //   records.length > 0
  //     ? records.map((record) => <Category key={record.id} {...record} />)
  //     : "No Categories Available";

  return (
    // <div className="grid grid-cols-4 gap-20  max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-5">
    //   {categoriesList}
    // </div>

    <Loading loading={loading} error={error}>
      <div className="grid grid-cols-4 gap-20  max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-5">
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </div>
    </Loading>
  );
};

export default Categories;
