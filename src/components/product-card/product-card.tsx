import { Product } from "@/types/product.type";
import style from "./product-card.module.css";

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, price, category } = product;

    return (
        <div className={style.productCard}>
            <div className={style.productImage}></div>
            <h2 className={style.productTitle}>{name}</h2>
            <div className={style.productPrice}>€{price}</div>
            <div className={style.productIntro}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </div>
            <button className="btn btn-accent btn">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
