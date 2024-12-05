import { Product } from "@/types/product.type";

export default function ProductList() {
    const products: Product[] = [{ name: "pc", price: 500 }];

    return (
        <>
            {products.map((p, _) => (
                <div key={_}>{p.name}</div>
            ))}
        </>
    );
}
