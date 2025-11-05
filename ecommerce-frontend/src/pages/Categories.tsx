import React from "react";
import Category from "@components/Category/Category";

const Categories = () => {
  return (
    <div className="grid grid-cols-5 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-5">
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
};

export default Categories;
