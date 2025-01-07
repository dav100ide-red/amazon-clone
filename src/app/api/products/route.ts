import wait from "@/functions/wait";
import { Product } from "@/types/product.type";
import { NextResponse } from "next/server";

export async function GET() {
    const jsonData = NextResponse.json<Product[]>([
        {
            id: 1,
            name: "pc",
            price: 500,
            category: "electronic",
            imgSrc: "https://images.unsplash.com/photo-1560131914-2e469a0e8607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2OTQyNjF8MHwxfGFsbHx8fHx8fHx8fDE3MzYyNDg5NjF8&ixlib=rb-4.0.3&q=80&w=1080",
        },
    ]);

    const slowData = await wait(jsonData, 0);
    return slowData;
}
