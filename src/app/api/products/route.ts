import wait from "@/functions/wait";
import { Product } from "@/types/product.type";
import { NextResponse } from "next/server";

export async function GET() {
    // const queryString =
    const jsonData = NextResponse.json<Product[]>([
        { name: "pc", price: 500, category: "electronic" },
        { name: "Hoodie", price: 230, category: "clothing" },
        { name: "air pods", price: 160, category: "electronic" },
    ]);

    const slowData = await wait(jsonData, 2500);
    return slowData;
}
