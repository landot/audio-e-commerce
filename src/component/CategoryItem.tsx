import { orangeButtonStyles } from '@/data/buttons';
import BodyText from '@/style/BodyText.styles';
import Overline from '@/style/Overline.styles';
import StyledH2 from '@/style/StyledH2.styles';
import Image, { StaticImageData } from 'next/image';
import CustomButton from './CustomButton';
import StyledH4 from '@/style/StyledH4.styles';
import { CategoryItemStyles, CategoryItemImageStyles, CategoryItemImageBackgroundStyles, CategoryItemDescriptionStyles } from '@/style/CategoryItem.styles';
import useWindowSize from '@/hooks/useWindowSize';
import Link from "next/link";

export interface CategoryItemProps {
    img: StaticImageData;
    newProduct: boolean;
    name: string;
    description: string;
    href: string;
    reverse?: boolean;
}

function CategoryItem({ reverse = false, ...props }: CategoryItemProps) {
    const size = useWindowSize();
    return (
        <CategoryItemStyles $reverse={reverse} role="listitem">
            <CategoryItemImageStyles>
                <Image src={props.img} alt={`${props.name} image`}/>
                <CategoryItemImageBackgroundStyles />
            </CategoryItemImageStyles>
            <CategoryItemDescriptionStyles>
                {props.newProduct && (
                    <Overline>New Product</Overline>
                )}
                {size.width && size.width > 500 ? (
                    <StyledH2>{props.name}</StyledH2>
                ): (
                    <StyledH4>{props.name}</StyledH4>
                )}
                <BodyText $opacity={.5}>{props.description}</BodyText>
                <Link href={props.href}>
                    <CustomButton label={'See Product'} styles={orangeButtonStyles}></CustomButton>
                </Link>
            </CategoryItemDescriptionStyles>
        </CategoryItemStyles>
    )
}

export default CategoryItem;
