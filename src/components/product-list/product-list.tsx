import { Product } from "@/types/product.type";

export default async function ProductList() {
    const res = await fetch("http://localhost:3000/api/products");

    const products: Product[] = await res.json();
    return (
        <>
            {/* <Provider store={store}> */}
            {products.map((p: Product, _) => (
                <div style={{ textAlign: "center", fontSize: "3rem" }} key={_}>
                    {p.name}
                </div>
            ))}

            {/* </Provider> */}
        </>
    );
}
