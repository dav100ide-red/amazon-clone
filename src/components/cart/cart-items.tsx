"use client";
import { useAppSelector } from "@/store/hooks";
import { cartSelectors } from "@/store/slices/cartSlice";
import style from "./cart-items.module.css";
import CartItem from "./cart-item";

const CartItems = () => {
    const items = useAppSelector(cartSelectors.getItems);
    const totalItemsQntity = useAppSelector(cartSelectors.getTotatlItemsQntity);
    const cartTotalPrice = useAppSelector(cartSelectors.getCartTotalPrice);

    return (
        <div className={style.cartItems}>
            <div className={style.cartItems__header}>
                <h2>Shopping Cart</h2>
                <small>Price</small>
            </div>
            {items.length <= 0
                ? "Empty Cart..."
                : items.map((item, _) => {
                      //passare solo l'id, <CartItem/> pesca tramite un selector l'item interessato
                      return <CartItem key={_} itemId={item.id} />;
                  })}
            <div className={style.cartItems__footer}>
                Subtotal ({totalItemsQntity} items): <strong>€{cartTotalPrice}</strong>
            </div>
        </div>
    );
};

export default CartItems;
