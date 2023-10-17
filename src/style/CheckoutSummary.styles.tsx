import styled from "styled-components"
import BodyText from "./BodyText.styles"

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
