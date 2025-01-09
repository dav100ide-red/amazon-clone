import { IoIosSearch } from "react-icons/io";

import style from "./search-bar.module.css";
import { ALL_PRODUCT_CATEGORIES } from "@/constants/allProductCategories";
import { useAppDispatch } from "@/store/hooks";
import { homepageActions } from "@/store/slices/homepageSlice";
import { isValidCategory, ProductCategory } from "@/types/product.type";

export default function SearchBar() {
    const dispatch = useAppDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const nameField = formData.get("name")?.toString();
        const name = nameField !== "" ? nameField : undefined;
        const categoryField = formData.get("category")?.toString();
        const category = isValidCategory(categoryField) ? (categoryField as ProductCategory) : undefined;

        dispatch(
            homepageActions.searchProductsStart({
                name,
                category,
            }),
        );
    };
    return (
        <form className={style.searchBar} onSubmit={handleSubmit}>
            <div className={style.searchBarContent}>
                <select name="category">
                    <option value="0">all</option>
                    {ALL_PRODUCT_CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <input name="name" type="text" placeholder="Search Amazon.it" />
                <button type="submit" className={`btn btn-accent`}>
                    <IoIosSearch size={24} />
                </button>
            </div>
        </form>
    );
}
