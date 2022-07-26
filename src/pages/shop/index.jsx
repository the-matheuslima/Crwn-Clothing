import { Fragment, useContext } from "react";
import './style.scss';
import { CategoriesContext } from "../../context/categoriesContext";
import CategoryPreview from "../categories-preview";
import { Route, Routes } from "react-router-dom";
import Category from "../category";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}
export default Shop;