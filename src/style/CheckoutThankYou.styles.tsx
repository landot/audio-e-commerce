import styled from "styled-components"
import BodyText from "./BodyText.styles"
import { StyledButton } from "./StyledButton.styles"
import StyledH3 from "./StyledH3.styles"
import StyledH6 from "./StyledH6.styles"

export const ThankYouDialogStyles = styled.div`
    padding: 48px;
    display: flex;
    flex-direction: column;

    ${StyledButton} {
        margin-top: 46px;
    }

    > ${StyledH3} {
        margin-top: 33px;
    }

    > ${BodyText} {
        margin-top: 24px;
    }
`
export const ProductSectionStyles = styled.div`
    padding: 24px;
    width: 55%;
    background: #F1F1F1;
    border-radius: 8px;

    hr {
        margin: 12px 0;
    }

    button {
        width: 100%;
    }

    > ${BodyText} {
        text-align: center;
    }
`

export const GrandTotalStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 33px;
    width: 45%; 
    background: #000;
    border-radius: 0px 8px 8px 0px;

    ${BodyText} {
        color: #FFF;
        text-transform: uppercase;
    }

    ${StyledH6} {
        color: #FFF;
        margin-top: 8px;
    }
`

export const ProductSummaryStyles = styled.div`
    display: flex;
    width: 100%;
    margin-top: 33px;

    @media (max-width: 500px) {
        flex-direction: column;
        margin-top: 24px;

        ${GrandTotalStyles}, ${ProductSectionStyles} {
            width: 100%;
        }
    }
`
