type ProductCategory = "electronics" | "fitness" | "clothing";

export type Product = {
    name: string;
    price: number;
    category: ProductCategory;
};

export type CartItem = Product & { quantity: number };
