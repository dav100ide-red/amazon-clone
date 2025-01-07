import wait from "@/functions/wait";
import { Product } from "@/types/product.type";
import { NextResponse } from "next/server";
import { products } from "./data";

export async function GET() {
    const nextResponse = NextResponse.json<Product[]>(products);

    const slowRes = await wait(nextResponse, 0);
    return slowRes;
}
