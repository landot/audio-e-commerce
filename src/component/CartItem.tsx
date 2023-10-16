import BodyText from "@/style/BodyText.styles";
import { ProductDetailStyles, ProductDetailContentStyles, ProductInfoStyles } from "@/style/CartItem.styles";
import Image, { StaticImageData } from 'next/image';

export interface CartItemData {
    name: string;
    price: number;
    img: StaticImageData;
    quantity: number;
}

function CartItem(props: CartItemData) {
    return (
    <ProductDetailStyles data-testid='cart-item'>
        <Image src={props.img} alt={"product image"} />
        <ProductDetailContentStyles>
            <ProductInfoStyles>
                <BodyText>{props.name}</BodyText>
                <BodyText opacity={.5}>x{props.quantity}</BodyText>
            </ProductInfoStyles>
            <BodyText opacity={.5}>$ {props.price}</BodyText>
        </ProductDetailContentStyles>
    </ProductDetailStyles>
    )
}

export default CartItem;
