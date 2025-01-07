"use client";
import { Product } from "@/types/product.type";
import style from "./product-card.module.css";
import Image from "next/image";
import { useAppDispatch } from "@/store/hooks";
import { cartActions } from "@/store/slices/cartSlice";

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useAppDispatch();

    const { name, price, imgSrc } = product;

    const handleAddToCart = () => {
        const cartItem = { ...product, quantity: 1 };
        dispatch(cartActions.addToCart(cartItem));
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
