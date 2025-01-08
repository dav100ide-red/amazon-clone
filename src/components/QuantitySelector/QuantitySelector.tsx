import style from "./QuantitySelector.module.css";

export type QuantitySelectorProps = {
    quantity: number;
    onChange: (newQntity: number) => void;
};

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onChange }) => {
    const emitNewQntity = (qntity: number) => {
        onChange(qntity);
    };

    return (
        <div className={style.quantitySelector}>
            <button onClick={() => emitNewQntity(quantity - 1)}>-</button>
            <span>quantitySelector: {quantity}</span>
            <button onClick={() => emitNewQntity(quantity + 1)}>+</button>
        </div>
    );
};

export default QuantitySelector;
