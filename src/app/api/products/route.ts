import { Product } from "@/types/product.type";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json<Product[]>([
        { name: "pc", price: 500 },
        { name: "ipad", price: 230 },
        { name: "air pods", price: 160 },
    ]);
}
