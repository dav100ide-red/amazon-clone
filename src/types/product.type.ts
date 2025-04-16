import { ALL_PRODUCT_CATEGORIES } from "@/constants/allProductCategories";

export type ProductCategory = (typeof ALL_PRODUCT_CATEGORIES)[number];

export type Product = {
    id: number; //unique incremental identifier
    name: string;
    price: number;
    category: ProductCategory;
    imgSrc: string;
};

export type CartItem = Product & { quantity: number };

export type ProductsFilter = {
    name?: string;
    category?: ProductCategory;
};

export const isValidCategory = (category: string | undefined): category is ProductCategory => {
    if (!category) return false;
    return (ALL_PRODUCT_CATEGORIES as readonly string[]).includes(category);
};
