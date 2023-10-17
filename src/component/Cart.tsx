import { orangeButtonStyles } from "@/data/buttons";
import BodyText from "@/style/BodyText.styles";
import { CartStyles, CartHeaderStyles, CartItemsStyles, TotalStyles } from "@/style/Cart.styles";
import { Orange } from "@/style/CompanyMessage.styles";
import StyledH6 from "@/style/StyledH6.styles";
import { calculateTotal } from "@/utils/calculateTotal";
import CustomButton from "./CustomButton";
import EditableCartItem from "./EditableCartItem";
import { CartItemData } from "./StaticCartItem";

function Cart(props: {
    items: CartItemData[]
}) {

    return (
        <CartStyles>
            <CartHeaderStyles>
                <StyledH6>Cart ({props.items.length})</StyledH6>
                <button><Orange><BodyText>Remove all</BodyText></Orange></button>
            </CartHeaderStyles>
            <CartItemsStyles>
                {props.items.map(item => {
                    return <EditableCartItem key={item.name} item={item} handleCountChange={() => null} />
                })}
            </CartItemsStyles>
            <TotalStyles>
                <BodyText $opacity={.5} $textTransform={'uppercase'}>Total</BodyText>
                <BodyText $fontWeight={700}>$ {calculateTotal(props.items)}</BodyText>
            </TotalStyles>
            <CustomButton label={"Checkout"} styles={{
                    ...orangeButtonStyles,
                    width: '100%'
                }} 
            />
        </CartStyles>
    )
}

export default Cart;
