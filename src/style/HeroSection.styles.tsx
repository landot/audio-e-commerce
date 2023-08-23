import styled from "styled-components"
import BodyText from "./BodyText.styles"
import Overline from "./Overline.styles"
import { StyledButton } from "./StyledButton.styles"
import StyledH1 from "./StyledH1.styles"

export const HeroSectionContainerStyles = styled.div`
    z-index: 1;
    width: 100%;
    height: 400px;
    padding: 10px;
    position: relative;
    background: #191919;
    display: flex;

    ${Overline} {
        color: #FFF;
        opacity: 0.5;
    }

    ${StyledH1} {
        margin-top: 24px;
        color: #FFF;
    }

    ${BodyText} {
        margin-top: 24px;
        color: #FFF;
        opacity: 0.75;
    }

    ${StyledButton} {
        margin-top: 40px;
    }
`

export const HeroSectionDescriptionStyles = styled.div`
    z-index: 3;
    width: 100%;
    height: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeroImageStyles = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    img {
        float: right;
        z-index: 2;
        max-width:100%;
        max-height:100%;
    }
`
