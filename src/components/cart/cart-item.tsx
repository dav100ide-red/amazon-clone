import { useAppDispatch, useAppSelector } from "@/store/hooks";
import style from "./cart-item.module.css";
import { cartActions, cartSelectors } from "@/store/slices/cartSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

export type CartItemProps = {
    itemId: number;
};

const CartItem: React.FC<CartItemProps> = ({ itemId }) => {
    const item = useAppSelector((state: RootState) => cartSelectors.getItemById(state, itemId));
    const totalPrice = useAppSelector((state: RootState) => cartSelectors.getTotalPriceById(state, itemId));
    const dispatch = useAppDispatch();

    if (!item) {
        return `No Item with the following Id: ${itemId}`;
    }
    const { name, imgSrc, quantity } = item;

    const dispatchRemoveItem = () => {
        dispatch(cartActions.removeItemFromCart(item));
    };

    const handleQntityChange = (newQntity: number) => {
        if (newQntity > 0) {
            const itemWithNewQntity = { ...item, quantity: newQntity };
            dispatch(cartActions.setItemQntity(itemWithNewQntity));
            return;
        }
        dispatchRemoveItem();
    };

    return (
        <div className={style.cartItem}>
            <div className={style.cartItem__img}>
                <Image src={imgSrc} alt={name} fill={true} style={{ objectFit: "cover" }} />
            </div>
            <div className={style.cartItem__content}>
                <div className={style.cartItem__content__top}>
                    <h3 className={`fw-400`}>{name}</h3>
                    <h5>€{totalPrice}</h5>
                </div>
                <div className={style.cartItem__content__bottom}>
                    <QuantitySelector quantity={quantity} onChange={handleQntityChange} />|
                    <button onClick={dispatchRemoveItem}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
