import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card";
import './style.scss'

function CategoryPreview({ title, products }) {
    console.log(products);
    return (
        <div className="category-preview-container">
            <h2>
                <Link className='title' to={title}>
                    {title}
                </Link>
            </h2>
            <div className="preview">
                {products &&
                    products.filter((_, idx) => idx < 4).map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
}

export default CategoryPreview;
