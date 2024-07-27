import React from "react";
import categoryInfos from "./CategoryFullnfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section>
      <div className={classes.category_container}>
        {categoryInfos.map((item, i) => (
          <CategoryCard data={item} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Category;
