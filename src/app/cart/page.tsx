import style from "./page.module.css";
import CartItems from "@/components/cart/cart-items";

export default function Page() {
    return (
        <>
            <div className={style.cartPage}>
                <CartItems />
                {/* <CartSummary/> shows subtotal, total quantity, and the "Proceed to Checkout" button*/}
                {/* <RecommendedProducts/> */}
            </div>
        </>
    );
}
