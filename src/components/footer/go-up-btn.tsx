import style from "./go-up-btn.module.css";
export default function GoUpBtn() {
    //valutare se usare <Btn/> component qnd verrà sviluppato
    return <button className={`btn ${style.goUpBtn}`}>Go up</button>;
}
