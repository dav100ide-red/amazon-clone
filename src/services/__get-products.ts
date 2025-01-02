"use server";
//Server Actions are asynchronous functions that run on the server side. Can be used in both Server and Client Components
import { Product } from "@/types/product.type";

export async function getProducts(): Promise<Product[]> {
    const url = new URL("http://localhost:3000/api/products");

    try {
        const response = await fetch(url);
        const data: unknown = await response.json();

        if (!data || !Array.isArray(data)) {
            throw new Error("Invalid data received from API");
        }

        return data as Product[];
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
}
