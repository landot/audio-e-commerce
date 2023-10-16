import styled from "styled-components"
import BodyText from "./BodyText.styles";

export const ProductDetailStyles = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        max-width: 64px;
        max-height: 64px;
        margin-right: 16px;
    }

    ${BodyText}:first-child {
        font-weight: 700;
    }
`

export const ProductInfoStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const ProductDetailContentStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
