import React from "react";
import "./style.scss"

function Categories({ title, imageUrl }) {
    return (
        <div className="category__container">
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="category__container-body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default Categories;
