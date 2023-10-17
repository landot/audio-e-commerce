import { CartItemData } from "@/component/StaticCartItem";

export function calculateTotal(items: CartItemData[]) {
    let total = 0;
    items.forEach(item => {
        total += item.price * item.quantity
    })
    return total
}
