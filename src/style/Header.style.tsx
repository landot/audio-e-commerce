import styled from "styled-components"
import SubTitle from "./SubTitle.styles"

export const HeaderStyles = styled.nav`
    width: 100%;
    padding: 35px 0;
    display: flex;
    justify-content: space-between;

    img {
        cursor: pointer;
    }
`
export const NavLinkContainerStyles = styled.div`
    display: flex;
    gap: 34px;
`
export const NavLink = styled.a`
    cursor: pointer;
    color: #FFF;
    text-transform: uppercase;

    ${SubTitle} {
        color: #FFF;
        letter-spacing: 2px;
    }

    ${SubTitle}:hover {
        color: #D87D4A;
    }
`
