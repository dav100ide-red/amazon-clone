import { isValidCategory, Product, ProductCategory, ProductsFilter } from "@/types/product.type";
import { NextRequest, NextResponse } from "next/server";
import { products } from "./data";

const filterProducts = (products: Product[], filter: ProductsFilter): Product[] => {
    return products
        .filter((product) => !filter.name || product.name.toLowerCase().includes(filter.name.toLowerCase()))
        .filter((product) => !filter.category || product.category === filter.category);
};

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const filter: ProductsFilter = {
        name: searchParams.get("name") ?? undefined,
        category: searchParams.get("category") as ProductCategory | undefined,
    };

    if (filter.category && !isValidCategory(filter.category)) {
        return NextResponse.json({ error: `Invalid category: ${filter.category}` }, { status: 400 });
    }

    const filteredProducts = filterProducts(products, filter);

    return NextResponse.json<Product[]>(filteredProducts);
}
