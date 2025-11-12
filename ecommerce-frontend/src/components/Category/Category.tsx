import { Link } from "react-router-dom";

// import type TCategory
import type { TCategory } from "@customTypes/category";

// props type
// interface ICategoryProps {
//   title: string;
//   prefix: string;
//   img: string;
// }

const Category = ({ title, prefix, img }: TCategory) => {
  return (
    <Link to={`/categories/products/${prefix}`}>
      <div className="container mt-10 text-center">
        <img
          src={img}
          className="w-[150px] h-[150px] rounded-full object-cover mx-auto"
        />
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export default Category;
