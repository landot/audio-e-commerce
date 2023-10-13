import Image from 'next/image';
import logo from "../assets/shared/desktop/logo.svg";
import hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import { companyDescription } from "@/data/constant";
import { Copyright, Description, FooterNavContainer, FooterStyles, Logo, SocialMediaContainer, OrangeLine } from "@/style/Footer.styles";


function Footer() {
    return (
        <FooterStyles>
            <Logo src={logo} alt={"audiophile logo"} />
            <Description>{companyDescription}</Description>
            <Copyright>Copyright 2021. All Rights Reserved</Copyright>
            <SocialMediaContainer>
                <a role='link'>
                    <Image src={hamburger} alt={""}/>
                </a>
                <a role='link'>
                    <Image src={hamburger} alt={""}/>
                </a>
                <a role='link'>
                    <Image src={hamburger} alt={""}/>
                </a>
            </SocialMediaContainer>
            <FooterNavContainer>
                <ul>
                    <li role='link'>Home</li>
                    <li role='link'>Headphones</li>
                    <li role='link'>Speakers</li>
                    <li role='link'>Earphones</li>
                </ul>
            </FooterNavContainer>
            <OrangeLine />
        </FooterStyles>
    )
}

export default Footer;