// import TCategory type
import type { TCategory } from "@customTypes/category";

//  Generic Grid List Component

//  This component is reusable for any type of records (Category, Product, etc.)
//  because it uses Generics <T>.

//  Props:
//   - records: array of type T
//   - renderItem: function that receives (record: T) and returns JSX

//  T is constrained to HasId so React can use record.id as a unique key.

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};

// id type
type HasId = {
  id?: number;
};
const GridList = <T extends HasId>({
  records,
  renderItem,
}: GridListProps<T>) => {
  // get the categories list
  const categoriesList =
    records.length > 0
      ? records.map((record) => <div key={record.id}>{renderItem(record)}</div>)
      : "No Categories Available";

  return <>{categoriesList}</>;
};

export default GridList;
