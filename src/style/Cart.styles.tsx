import styled from "styled-components"
import BodyText from "./BodyText.styles"
import { StyledButton } from "./StyledButton.styles"

export const CartStyles = styled.div`
    padding: 32px;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 600px;
    border-radius: 8px;

    ${StyledButton} {
        margin-top: 24px;
    }
`

export const CartHeaderStyles = styled.div`
    display: flex;
    justify-content: space-between;

    button ${BodyText} {
        text-decoration-line: underline;
        opacity: 0.5;
    }

    button:hover ${BodyText} {
        opacity: 1.0;
        color: #D87D4A;
    }
`

export const CartItemsStyles = styled.div`
    height: 100%;
    max-height: 350px;
    overflow: auto;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const TotalStyles = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
`
