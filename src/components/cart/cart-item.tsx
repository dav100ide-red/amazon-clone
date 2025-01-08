import { useAppSelector } from "@/store/hooks";
import style from "./cart-item.module.css";
import { cartSelectors } from "@/store/slices/cartSlice";
import { RootState } from "@/store/store";
import Image from "next/image";

export type CartItemProps = {
    itemId: number;
};

const CartItem: React.FC<CartItemProps> = ({ itemId }) => {
    const item = useAppSelector((state: RootState) => cartSelectors.getItemById(state, itemId));
    const totalPrice = useAppSelector((state: RootState) => cartSelectors.getTotalPriceByQuantity(state, itemId));
    if (!item) {
        return `No Item with the following Id: ${itemId}`;
    }
    const { name, imgSrc } = item;

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
            </div>
        </div>
    );
};

export default CartItem;
