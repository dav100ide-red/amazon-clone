import style from "./footer.module.css";
import GoUpBtn from "./go-up-btn";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <GoUpBtn />
        </footer>
    );
}
