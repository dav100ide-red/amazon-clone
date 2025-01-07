import Hero from "@/components/Hero/Hero";
import ProductList from "@/components/product-list/product-list";
import style from "./page.module.css";

export default function Home() {
    return (
        <>
            <Hero />
            <div className={style.productList}>
                <ProductList />
            </div>
        </>
    );
}
