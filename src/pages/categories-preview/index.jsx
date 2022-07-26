import { Fragment, useContext } from "react";
import './style.scss';
import { CategoriesContext } from "../../context/categoriesContext";
import CategoryPreview from "../../components/category-preview";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    console.log(categoriesMap);
    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </>
    )
}
export default CategoriesPreview;