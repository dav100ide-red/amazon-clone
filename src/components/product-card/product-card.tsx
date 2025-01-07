import { Product } from "@/types/product.type";
import style from "./product-card.module.css";
import sliderImg_2 from "@/assets/images/slider/sliderImg_2.jpg";
import Image from "next/image";

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, price } = product;

    return (
        <div className={style.productCard}>
            <h2 className={style.productTitle}>{name}</h2>
            <div className={style.productImg}>
                <Image src={sliderImg_2} alt="sliderImg" fill style={{ objectFit: "cover" }} />
            </div>

            <div className={style.productPrice}>€{price}</div>
            <div className={style.productIntro}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </div>
            <button className="btn btn-accent btn">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
