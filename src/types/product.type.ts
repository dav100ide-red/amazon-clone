import { ALL_PRODUCT_CATEGORIES } from "@/constants/allProductCategories";

export type ProductCategory = (typeof ALL_PRODUCT_CATEGORIES)[number];

export type Product = {
    name: string;
    price: number;
    category: ProductCategory;
};

export type CartItem = Product & { quantity: number };
