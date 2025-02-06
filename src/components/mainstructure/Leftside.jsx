import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Leftside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="grid col-span-3 font-semibold mb-3 relative">
      <h2 className='text-xl font-bold'>All Categories ({categories.length})</h2>

      <div className="flex flex-col py-2 absolute top-5 ">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className={({ isActive }) =>
              `btn rounded-none text-left justify-start bg-base-100 border-none font-700 text-lg text-gray-600 ${
                isActive ? 'text-blue-500 font-bold' : ''
              }`
            }
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Leftside;