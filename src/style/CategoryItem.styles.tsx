import styled from "styled-components"
import BodyText from "./BodyText.styles"
import Overline from "./Overline.styles"
import { StyledButton } from "./StyledButton.styles"
import StyledH2 from "./StyledH2.styles"

interface CategoryItemStylesProps {
    $reverse: boolean;
}

export const CategoryItemStyles = styled.div<CategoryItemStylesProps>`
    display: flex;
    flex-direction: ${props => props.$reverse ? 'row-reverse' : 'row'};
    gap: 125px;

    @media (max-width: 800px) {
        flex-direction: column;
        gap: 52px;
    }
    
    @media (max-width: 500px) {
        gap: 32px;
    }
`

export const CategoryItemImageStyles = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;

    img {
        position: relative;
        z-index: 2;
        display: block;
        max-width: 540px;
        max-height: 560px;
        width: 100%;
        height: 100%;
    }
`

export const CategoryItemDescriptionStyles = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${Overline} {
        margin-bottom: 16px;
    }

    ${BodyText} {
        margin-top: 32px;
    }

    ${StyledButton} {
        margin-top: 40px;
    }

    @media (max-width: 800px) {
        align-items: center;

        ${StyledButton} {
            margin-top: 24px;
        }

        ${StyledH2} {
            text-align: center;
        }
    }
    
    @media (max-width: 500px) {
        ${BodyText} {
            margin-top: 24px;
        }

        ${Overline} {
            margin-bottom: 24px;
        }
    }
`

export const CategoryItemImageBackgroundStyles = styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: #F1F1F1;
`
