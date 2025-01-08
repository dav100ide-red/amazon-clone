"use client";
import { Product } from "@/types/product.type";
import style from "./product-card.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cartActions, cartSelectors } from "@/store/slices/cartSlice";
import { RootState } from "@/store/store";

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, price, imgSrc, id } = product;
    const dispatch = useAppDispatch();
    const cartItem = useAppSelector((state: RootState) => cartSelectors.getItemById(state, id));

    const handleAddToCart = () => {
        if (!cartItem) {
            const newCartItem = { ...product, quantity: 1 };
            dispatch(cartActions.addToCart(newCartItem));
            return;
        }
        dispatch(cartActions.setItemQntity({ ...cartItem, quantity: cartItem.quantity + 1 }));
    };

    return (
        <div className={style.productCard}>
            <h2 className={style.productTitle}>{name}</h2>
            <div className={style.productImg}>
                <Image src={imgSrc} alt={name} fill style={{ objectFit: "cover" }} />
            </div>

            <div className={style.productPrice}>€{price}</div>
            <div className={style.productIntro}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </div>
            <button className="btn btn-accent btn" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
