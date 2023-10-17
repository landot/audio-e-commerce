import BodyText from "@/style/BodyText.styles";
import { ProductDetailContentStyles, ProductDetailStyles, ProductInfoStyles } from "@/style/CartItem.styles";
import Image from 'next/image';
import AddQuantity from "./AddQuantity";
import { CartItemData } from "./StaticCartItem";

export interface EditableCartItemProps {
    item: CartItemData, 
    handleCountChange: (count: number) => null,
}

export function EditableCartItem(props: EditableCartItemProps) {
    return (
    <ProductDetailStyles data-testid='editable-cart-item'>
        <ProductDetailContentStyles>
            <Image src={props.item.img} alt={"product image"} />
            <ProductInfoStyles>
                <BodyText>{props.item.name}</BodyText>
                <BodyText opacity={.5}>$ {props.item.price}</BodyText>
            </ProductInfoStyles>
            </ProductDetailContentStyles>
        <AddQuantity quantity={props.item.quantity} handleIncrement={props.handleCountChange} />
    </ProductDetailStyles>
    )
}

export default EditableCartItem;
