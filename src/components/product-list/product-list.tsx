import { Product } from "@/types/product.type";

export default async function ProductList() {
    const res = await fetch("http://localhost:3000/api/products");

    const products = await res.json();
    return (
        <>
            {products.map((p: Product, _) => (
                <div key={_}>{p.name}</div>
            ))}
        </>
    );
}
