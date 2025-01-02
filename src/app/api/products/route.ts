import { Product } from "@/types/product.type";
import { NextResponse } from "next/server";

export async function GET() {
    // const queryString =
    return NextResponse.json<Product[]>([
        { name: "pc", price: 500, category: "electronics" },
        { name: "Hoodie", price: 230, category: "clothing" },
        { name: "air pods", price: 160, category: "electronics" },
    ]);
}
