import StyledH6 from "@/style/StyledH6.styles"
import SubTitle from "@/style/SubTitle.styles"
import arrowRight from "../assets/shared/desktop/icon-arrow-right.svg";
import Image, { StaticImageData } from 'next/image';
import { CategoryStyles, CategoryContentStyles, CategoryLinkStyles, CategoryShadowStyles } from "@/style/Category.styles";
import { useRouter } from "next/navigation";

function MenuItem(props: {
    img: StaticImageData, 
    name: string, 
    href: string
}) {
    const router = useRouter();

    return (
        <CategoryStyles onClick={() => router.push(props.href)}>
            <CategoryContentStyles>
                <Image src={props.img} alt={`${props.name} category image`}/>
                <StyledH6>{props.name}</StyledH6>
                <CategoryLinkStyles>
                    <a href={props.href}><SubTitle>shop</SubTitle></a>
                    <Image src={arrowRight} alt={`click to go to ${props.name} shop`}/>
                </CategoryLinkStyles>
            </CategoryContentStyles>
            <CategoryShadowStyles />
        </CategoryStyles>
    )
}

export default MenuItem;