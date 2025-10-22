import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch('/categories.json').then(res => res.json())
// console.log(categoriesPromise);
const Categories = () => {
    const categories = use(categoriesPromise)
    // console.log(categories);
    return (
        <div>
            <h3 className='font-bold text-primary text-xl'>All Categories</h3>
            <div className='grid grid-cols-1'>
                {categories.map((category) => (<NavLink key={category.id}
                    className='flex justify-center items-center
                    py-3 bg-base-100 text-[#9f9f9f] rounded-lg border-0 font-semibold hover:bg-base-200'
                    to={`/category/${category.id}`}
                >{category.name}</NavLink>))}
            </div>
        </div>
    );
};

export default Categories;