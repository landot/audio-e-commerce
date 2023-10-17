import BodyText from "@/style/BodyText.styles";
import { ProductDetailContentStyles, ProductDetailStyles, ProductInfoStyles } from "@/style/CartItem.styles";
import Image, { StaticImageData } from 'next/image';

export interface CartItemData {
    name: string;
    price: number;
    img: StaticImageData;
    quantity: number;
}

export function StaticCartItem(props: CartItemData) {
    return (
    <ProductDetailStyles data-testid='static-cart-item'>
        <ProductDetailContentStyles>
            <Image src={props.img} alt={"product image"} />
            <ProductInfoStyles>
                <BodyText>{props.name}</BodyText>
                <BodyText opacity={.5}>$ {props.price}</BodyText>
            </ProductInfoStyles>
            </ProductDetailContentStyles>
            <BodyText opacity={.5}>x{props.quantity}</BodyText>
    </ProductDetailStyles>
    )
}

export default StaticCartItem;
