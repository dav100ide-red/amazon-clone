import style from "./header.module.css";
export default function Header() {
    return (
        <header className={style.header}>
            Header
            <div className="fst-italic fw-400">test pippo</div>
            <h2 className="fw-500">h2 pippo</h2>
        </header>
    );
}
