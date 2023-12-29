import Image from 'next/image';
import hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import SubTitle from '@/style/SubTitle.styles';
import { HeaderProps } from '@/type/HeaderProps';
import { HeaderStyles, NavLinkContainerStyles, NavLink, LeftHeaderStyles } from '@/style/Header.style';


function Header(props: HeaderProps) {
    return (
        <HeaderStyles role='menubar'>
            <LeftHeaderStyles>
                <Image src={hamburger} alt={'Click to expand hamburger menu'} />
                <Image src={logo} alt={'Click logo to go to home page'} />
            </LeftHeaderStyles>
            <NavLinkContainerStyles>
                <li>
                    <NavLink href='/' aria-label="Home"><SubTitle>Home</SubTitle></NavLink>
                </li>
                <li>
                    <NavLink href='/headphones' aria-label="Headphones"><SubTitle>Headphones</SubTitle></NavLink>
                </li>
                <li>
                    <NavLink href='/speakers' aria-label="Speakers"><SubTitle>Speakers</SubTitle></NavLink>
                </li>
                <li>
                    <NavLink href='/earphones' aria-label="Earphones"><SubTitle>Earphones</SubTitle></NavLink>
                </li>
            </NavLinkContainerStyles>
            <Image src={cart} alt={'Click to show items in cart'} onClick={props.handleCartClick}/>
        </HeaderStyles>
    )
}

export default Header;