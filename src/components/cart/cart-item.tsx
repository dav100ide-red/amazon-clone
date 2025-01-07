import { CartItem as CartItemType } from "@/types/product.type";
import style from "./cart-item.module.css";
export type CartItemProps = {
    item: CartItemType;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { name, price } = item;
    return (
        <div className={style.cartItem}>
            <h4>{name}</h4>
            <h5>€{price}</h5>
        </div>
    );
};

export default CartItem;
