import style from "./QuantitySelector.module.css";

export type QuantitySelectorProps = {
    quantity: number;
};

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity }) => {
    return <h2 className={style.quantitySelector}>quantitySelector: {quantity}</h2>;
};

export default QuantitySelector;
