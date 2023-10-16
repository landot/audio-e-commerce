import { CartItemData } from "@/component/CartItem";

export function calculateTotal(items: CartItemData[]) {
    let total = 0;
    items.forEach(item => {
        total += item.price * item.quantity
    })
    return total
}
