import { IoIosSearch } from "react-icons/io";

import style from "./search-bar.module.css";
import { ALL_PRODUCT_CATEGORIES } from "@/constants/allProductCategories";

export default function SearchBar() {
    return (
        <form className={style.searchBar}>
            <div className={style.searchBarContent}>
                <select>
                    <option value="0">all</option>
                    {ALL_PRODUCT_CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <input type="text" placeholder="Search Amazon.it" />
                <button type="submit" className={`btn btn-accent`}>
                    <IoIosSearch size={24} />
                </button>
            </div>
        </form>
    );
}
