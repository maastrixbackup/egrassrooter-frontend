import React from "react";

const Category = ({categorys}) => {
  console.log(categorys);
  
  return (
    <>
      <div class="section-title mt-4">
        <h4>Categories</h4>
      </div>
      <div class="custome-category">
        <div class="custome-category-body">
          <ul>
          {categorys?.map((category, i) => (
            <li key={i}>
              <a href="#">
                {category.category_name} <span class="badge">({category.news_count})</span>
              </a>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
