import React from "react";
import CategoryItem from "../category-item/CategoryItem";

const CategoryMenu = ({ categories = [] }) => {
  return (
    <div className="categories-container" data-testid="category-menu">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem title={title} imageUrl={imageUrl} key={id} />
      ))}
    </div>
  );
};

export default CategoryMenu;
