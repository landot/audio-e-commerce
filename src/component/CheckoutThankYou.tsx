import { orangeButtonStyles } from "@/data/buttons";
import BodyText from "@/style/BodyText.styles";
import StyledH3 from "@/style/StyledH3.styles";
import { Dialog, Divider } from "@mui/material";
import { useState } from "react";
import CustomButton from "./CustomButton";
import Image from 'next/image';
import checkOutIcon from '../assets/checkout/icon-order-confirmation.svg';
import StyledH6 from "@/style/StyledH6.styles";
import Link from "next/link";
import CartItem, { CartItemData } from "./CartItem";
import { ThankYouDialogStyles, ProductSummaryStyles, ProductSectionStyles, GrandTotalStyles } from "@/style/CheckoutThankYou.styles";
import { calculateTotal } from "@/utils/calculateTotal";

function CheckoutThankYou(props: {
    order: CartItemData[], 
    showModal: boolean, 
    hideModal: () => void
}) {
    const [expandDetails, setExpandDetails] = useState(false);

    function toggleExpandDetails() {
        setExpandDetails(prev => !prev)
    }

    return (
    <>
        <Dialog open={props.showModal} onClose={props.hideModal}>
            <ThankYouDialogStyles>
                <Image src={checkOutIcon} alt={"check-mark icon"}></Image>
                <StyledH3>Thank you for your order</StyledH3>
                <BodyText opacity={.5}>You will receive an email confirmation shortly.</BodyText>
                <ProductSummaryStyles>
                    <ProductSectionStyles>
                        <CartItem {...props.order[0]}/>
                        { expandDetails && props.order.length > 1 && (
                            <>
                                {
                                    props.order.map((o, index) => {
                                        if(index !== 0) {
                                            return (
                                                <CartItem key={o.name} {...o}/>
                                            )
                                        }
                                    })
                                }
                                <Divider />
                                <button data-testid='hide-items' onClick={toggleExpandDetails}>
                                    <BodyText opacity={.5}>show less</BodyText>
                                </button>
                            </>
                        )}
                        { !expandDetails && props.order.length > 1 && (
                            <>
                                <Divider />
                                <button data-testid='expand-items' onClick={toggleExpandDetails}>
                                <BodyText opacity={.5}>and {props.order.length - 1} other item(s)</BodyText>
                                </button>
                            </>
                        )}
                    </ProductSectionStyles>
                    <GrandTotalStyles>
                        <BodyText opacity={.5}>Grand Total</BodyText>
                        <StyledH6 data-testid='total-cost'>
                            $ {calculateTotal(props.order)}
                        </StyledH6>
                    </GrandTotalStyles>
                </ProductSummaryStyles>

                <Link href={'/'}>
                    <CustomButton label={"Back to Home"} styles={{
                        ...orangeButtonStyles,
                        width: '100%'
                    }}/>
                </Link>
            </ThankYouDialogStyles>
        </Dialog>
    </>
    )
}

export default CheckoutThankYou;
