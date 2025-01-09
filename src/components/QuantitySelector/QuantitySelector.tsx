import style from "./QuantitySelector.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";

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
            <button className="btn" onClick={() => emitNewQntity(quantity - 1)}>
                {quantity === 1 ? <MdDeleteOutline /> : <FaPlus />}
            </button>
            <span className={style.quantitySelector__value}>{quantity}</span>
            <button className="btn" onClick={() => emitNewQntity(quantity + 1)}>
                <FaMinus />
            </button>
        </div>
    );
};

export default QuantitySelector;
