import BodyText from "@/style/BodyText.styles";
import StyledH2 from "@/style/StyledH2.styles";
import bestGearDesktop from '../assets/shared/desktop/image-best-gear.jpg';
import bestGearTablet from '../assets/shared/tablet/image-best-gear.jpg';
import bestGearMobile from '../assets/shared/mobile/image-best-gear.jpg';

import Image from 'next/image';
import { CompanyMessageContainerStyles, CompanyMessageImageStyles, CompanyMessageStyles, Orange } from "@/style/CompanyMessage.styles";
import useWindowSize from "@/hooks/useWindowSize";
import StyledH4 from "@/style/StyledH4.styles";

function CompanyMessage() {
    const size = useWindowSize();

    return (
        <CompanyMessageContainerStyles aria-label='company-message'>
            <CompanyMessageStyles>
                {size.width && size.width <= 500 ? (
                    <StyledH4>Bringing you the <Orange>best</Orange> audio gear</StyledH4>
                ): (
                    <StyledH2>Bringing you the <Orange>best</Orange> audio gear</StyledH2>
                )}
                <BodyText opacity={.5}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</BodyText>
            </CompanyMessageStyles>
            <CompanyMessageImageStyles>
                {size.width && size.width > 800 && (
                    <Image src={bestGearDesktop} alt={"Man wearing headphones in a black and white sound studio"} />
                )}
                {size.width && size.width > 500 && size.width <= 800 && (
                    <Image src={bestGearTablet} alt={"Man wearing headphones in a black and white sound studio"} />
                )}
                {size.width && size.width <= 500 && (
                    <Image src={bestGearMobile} alt={"Man wearing headphones in a black and white sound studio"} />
                )}
            </CompanyMessageImageStyles>
        </CompanyMessageContainerStyles>
    )
}

export default CompanyMessage;