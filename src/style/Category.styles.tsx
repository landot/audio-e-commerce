import styled from "styled-components"
import SubTitle from "./SubTitle.styles"

export const CategoryStyles = styled.div`
    cursor: pointer;
    z-index: 1;
    position: relative;
    width: 100%;
    height: 100%;

    ${SubTitle} {
        line-height: normal;
        color: #000;
        opacity: 0.5;
    }
`

export const CategoryContentStyles = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    > img {
        display: block;
        max-width: 70%;
        max-height: 70%;
        width: auto;
        height: auto;
    }
`

export const CategoryLinkStyles = styled.div`
    margin: 15px 0 30px 0;
    display: flex;
    gap: 12px;
    align-items: center;

    img {
        width: 5px;
        height: 10px;
    }
`

export const CategoryShadowStyles = styled.div`
    z-index: 2;
    width: 100%;
    height: 204px;
    position: absolute;
    bottom: 0;
    border-radius: 8px;
    background: #F1F1F1;
`