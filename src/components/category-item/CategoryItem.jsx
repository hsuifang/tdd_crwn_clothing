import React from "react";
import "./categories-items.scss";

function CategoryItem({ id, title, imageUrl }) {
  return (
    <div className="category-container" data-testid="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container" key={id} data-testid="category">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
