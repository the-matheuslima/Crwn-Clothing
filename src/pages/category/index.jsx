import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductCard from "../../components/product-card";
import { CategoriesContext } from "../../context/categoriesContext";

import './style.scss'

function Category({ }) {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);

    }, [category, categoriesMap])

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>

            <div className='category-container'>
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </>
    );
}

export default Category;
