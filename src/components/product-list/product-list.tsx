"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { homepageActions } from "@/store/slices/homepageSlice";
import { Product } from "@/types/product.type";
import { useEffect } from "react";
import ProductCard from "../product-card/product-card";
import style from "./product-list.module.css";

export default function ProductList() {
    const dispatch = useAppDispatch();

    // Dispatch action to fetch products when the component mounts
    useEffect(() => {
        dispatch(homepageActions.fetchProductsStart());
    }, [dispatch]);

    // Retrieve products from the Redux store
    const { products, error } = useAppSelector((state) => state.homepage);

    // if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className={style.pageTitle}>
                <h1>Explore our products</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque aperiam ab quam beatae.
                    Dicta
                </p>
            </div>
            <div className={style.productList}>
                {products.map((p: Product, _) => (
                    <ProductCard product={p} key={_} />
                ))}
            </div>
        </>
    );
}
