import styled from "styled-components"
import SubTitle from "./SubTitle.styles";

export const HeaderStyles = styled.nav`
    background: #0E0E0E;
    width: 100%;
    padding: 35px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        cursor: pointer;
    }

    img:nth-child(1) {
        display: none;
    }

    @media (max-width: 800px) {
        padding: 32px 36px;

        img:nth-child(1) {
            display: block;
            margin-right: 42px;
        }
    }
`

export const LeftHeaderStyles = styled.div`
    display: flex;
    align-items: center;
`

export const NavLinkContainerStyles = styled.ul`
    display: flex;
    gap: 34px;
    margin: 0;

    li {
        list-style: none;
    }

    h2 {
        margin: 0;
    }

  @media (max-width: 800px) {
    display: none;
  }
`

export const NavLink = styled.a`
    cursor: pointer;
    color: #FFF;
    text-transform: uppercase;
    text-decoration: none;

    ${SubTitle} {
        color: #FFF;
        letter-spacing: 2px;
    }

    ${SubTitle}:hover {
        color: #D87D4A;
    }
`
