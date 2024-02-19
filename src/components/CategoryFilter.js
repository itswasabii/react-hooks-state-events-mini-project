import React, { useState } from "react";

function CategoryFilter({ categories, tasks, setFilteredTasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryButtons = categories.map((category, index) => (
    <button
      key={index}
      onClick={() => handleCategoryClick(category)}
      className={selectedCategory === category ? "selected" : ""}
    >
      {category}
    </button>
  ));

  function handleCategoryClick(category) {
   
    setSelectedCategory(category);

   
    if (category === "All") {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) => task.category === category);
      setFilteredTasks(filteredTasks);
    }
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;