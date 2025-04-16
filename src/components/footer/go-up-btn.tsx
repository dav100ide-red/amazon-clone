"use client";
import style from "./go-up-btn.module.css";
export default function GoUpBtn() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    //valutare se usare <Btn/> component qnd verrà sviluppato
    return (
        <button className={`btn ${style.goUpBtn}`} onClick={scrollToTop}>
            Back to top
        </button>
    );
}
