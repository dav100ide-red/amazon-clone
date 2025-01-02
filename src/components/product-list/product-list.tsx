"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { homepageActions } from "@/store/slices/homepageSlice";
import { Product } from "@/types/product.type";
import { useEffect } from "react";

export default function ProductList() {
    const dispatch = useAppDispatch();

    // Dispatch action to fetch products when the component mounts
    useEffect(() => {
        dispatch(homepageActions.fetchProductsStart());
    }, [dispatch]);

    // Retrieve products from the Redux store
    const { products, loading, error } = useAppSelector((state) => state.homepage);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            {products.map((p: Product, index) => (
                <div style={{ textAlign: "center", fontSize: "3rem" }} key={index}>
                    {p.name}
                </div>
            ))}
        </>
    );
}
