import Image from 'next/image';
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import SubTitle from '@/style/SubTitle.styles';
import { HeaderProps } from '@/type/HeaderProps';
import { HeaderStyles, NavLinkContainerStyles, NavLink } from '@/style/Header.style';

function Header(props: HeaderProps) {
    return (
        <HeaderStyles>
            <Image src={logo} alt={'Click logo to go to home page'} />
            <NavLinkContainerStyles>
                {/* TODO add valid hrefs after pages are working */}
                <NavLink href=''><SubTitle>Home</SubTitle></NavLink>
                <NavLink href=''><SubTitle>Headphones</SubTitle></NavLink>
                <NavLink href=''><SubTitle>Speakers</SubTitle></NavLink>
                <NavLink href=''><SubTitle>Earphones</SubTitle></NavLink>
            </NavLinkContainerStyles>
            <Image src={cart} alt={'Click to show items in cart'} onClick={props.handleCartClick}/>
        </HeaderStyles>
    )
}

export default Header;