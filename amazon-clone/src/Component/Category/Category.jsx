import React from "react";
import { Categoryinfos } from "./CategoryFullInfos"; 
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";
const Category = () => {
  return (
    <section className={classes.category__container}>
      {Categoryinfos.map((info, index) => (
        <CategoryCard key={index} data={info} />
      ))}
    </section>
  );
};

export default Category;

