import { IoIosSearch } from "react-icons/io";

import style from "./search-bar.module.css";

export default function SearchBar() {
    return (
        <form className={style.searchBar}>
            <select>
                <option value="0">all</option>
                <option value="1">computer</option>
                <option value="2">Fitness</option>
            </select>
            <input type="text" placeholder="Search Amazon.it" />
            <button type="submit" className={`btn btn-accent`}>
                <IoIosSearch size={24} />
            </button>
        </form>
    );
}
