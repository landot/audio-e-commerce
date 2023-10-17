import { orangeButtonStyles } from "@/data/buttons";
import BodyText from "@/style/BodyText.styles";
import { Orange } from "@/style/CompanyMessage.styles";
import StyledH6 from "@/style/StyledH6.styles";
import { calculateTotal } from "@/utils/calculateTotal";
import CartItem, { CartItemData } from "./StaticCartItem";
import CustomButton from "./CustomButton";
import { CheckoutSummaryStyles, InvoiceStyles, CartItemStyles } from "@/style/CheckoutSummary.styles";

 function CheckoutSummary(props: {
    order: CartItemData[],
    shipping: number,
    vat: number,
    handleContinue: () => void,
 }) {
    const total = calculateTotal(props.order);
    const grandTotal = total + props.vat + props.shipping;

    return (
        <CheckoutSummaryStyles>
            <StyledH6>Summary</StyledH6>
            {props.order.map(o => {
                return <CartItem key={o.name} {...o}/>
            })}
            <InvoiceStyles>
                <CartItemStyles>
                    <BodyText $opacity={.5}>Total</BodyText>
                    <BodyText>$ {total}</BodyText>
                </CartItemStyles>
                <CartItemStyles>
                    <BodyText $opacity={.5}>Shipping</BodyText>
                    <BodyText>$ {props.shipping}</BodyText>
                </CartItemStyles>
                <CartItemStyles>
                    <BodyText $opacity={.5}>Vat (included)</BodyText>
                    <BodyText>$ {props.vat}</BodyText>
                </CartItemStyles>
                <CartItemStyles>
                    <BodyText $opacity={.5}>Grand Total</BodyText>
                    <BodyText><Orange>$ {grandTotal}</Orange></BodyText>
                </CartItemStyles>
            </InvoiceStyles>
            <CustomButton 
                label={"Continue & Pay"} 
                styles={{
                    ...orangeButtonStyles,
                    width: '100%'
                }}
                onClick={props.handleContinue}
            />
        </CheckoutSummaryStyles>
    )
 }

 export default CheckoutSummary;
