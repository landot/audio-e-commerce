import { orangeButtonStyles } from "@/data/buttons";
import BodyText from "@/style/BodyText.styles";
import { Orange } from "@/style/CompanyMessage.styles";
import StyledH6 from "@/style/StyledH6.styles";
import { calculateTotal } from "@/utils/calculateTotal";
import styled from "styled-components";
import CartItem, { CartItemData } from "./CartItem";
import CustomButton from "./CustomButton";

export const CartItemStyles = styled.div`
    display: flex;
    justify-content: space-between;

    ${BodyText} {
        text-transform: uppercase;
    }

    ${BodyText}:nth-child(2) {
        font-weight: 700;
    }
`

export const CheckoutSummaryStyles = styled.div`
    border-radius: 8px;
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px;


    ${CartItemStyles}:last-of-type {
        margin-top: 16px;
    }

    @media (max-width: 500px) {
        padding: 32px 24px;
    }
`

export const InvoiceStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

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
                    <BodyText opacity={.5}>Total</BodyText>
                    <BodyText>$ {total}</BodyText>
                </CartItemStyles>
                <CartItemStyles>
                    <BodyText opacity={.5}>Shipping</BodyText>
                    <BodyText>$ {props.shipping}</BodyText>
                </CartItemStyles>
                <CartItemStyles>
                    <BodyText opacity={.5}>Vat (included)</BodyText>
                    <BodyText>$ {props.vat}</BodyText>
                </CartItemStyles>
                <CartItemStyles>
                    <BodyText opacity={.5}>Grand Total</BodyText>
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
