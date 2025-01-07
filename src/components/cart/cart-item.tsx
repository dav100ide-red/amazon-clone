import { CartItem as CartItemType } from "@/types/product.type";

export type CartItemProps = {
    item: CartItemType;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { name } = item;
    return <div>{name}</div>;
};

export default CartItem;
