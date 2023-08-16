import styled from "styled-components"
import Image from 'next/image';
import BodyText from "./BodyText.styles"

export const FooterStyles = styled.footer`
display: grid;
width: 100%;
height: fit-content;

grid-template-columns: 1fr 1fr;
grid-template-rows: fit-content;
gap: 20px;


grid-template-areas:
    "logo footerNavbar"
    "companyDescription socialMedia"
    "copyright copyright";

${BodyText} {
    color: #FFF;
    opacity: 0.5;
}

@media (max-width: 800px) {
    grid-template-areas:
        "logo logo"
        "footerNavbar footerNavbar"
        "companyDescription companyDescription"
        "copyright socialMedia";
}

@media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas:
        "logo"
        "companyDescription"
        "footerNavbar"
        "copyright"
        "socialMedia";
    justify-items: center;
    ${BodyText} {
        text-align: center;
    }
}
`

export const Logo = styled(Image)`
    grid-area: logo;
`

export const Description = styled(BodyText)`
    grid-area: companyDescription;
`

export const Copyright = styled(BodyText)`
    grid-area: copyright;
`

export const SocialMediaContainer = styled.div`
    grid-area: socialMedia;
    display: flex;
    justify-content: flex-end;
    gap: 5px;
`

export const FooterNavContainer = styled.div`
    grid-area: footerNavbar;

    ul {
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: flex-end;
    }

    li {
        color: white;
        list-style: none;
    }

    @media (max-width: 800px) {
        ul {
            justify-content: flex-start;
        }
    }

    @media (max-width: 500px) {
        ul {
            flex-direction: column;
        }
    }
`