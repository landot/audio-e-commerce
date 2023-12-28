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
                {/* TODO add valid hrefs after pages are working */}
                <li>
                    <NavLink href='/'><SubTitle>Home</SubTitle></NavLink>
                </li>
                <li>
                    <NavLink href='/headphones'><SubTitle>Headphones</SubTitle></NavLink>
                </li>
                <li>
                    <NavLink href='/speakers'><SubTitle>Speakers</SubTitle></NavLink>
                </li>
                <li>
                    <NavLink href='/earphones'><SubTitle>Earphones</SubTitle></NavLink>
                </li>
            </NavLinkContainerStyles>
            <Image src={cart} alt={'Click to show items in cart'} onClick={props.handleCartClick}/>
        </HeaderStyles>
    )
}

export default Header;