import { Product } from "@/types/product.type";

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, price, category } = product;

    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p>Category: {category}</p>
            <p>Price: €{price}</p>
        </div>
    );
};

export default ProductCard;
