import CategoriesItem from "../categories-item";
import "./style.scss"
const Directory = ({ categories }) => {
    return (
        <div className="directory__container">
            {categories.map(({ title, id, imageUrl }) => (
                <CategoriesItem key={id} imageUrl={imageUrl} title={title} />
            ))
            }
        </div>
    )
}
export default Directory;