import BodyText from "@/style/BodyText.styles";
import StyledH1 from "@/style/StyledH1.styles";
import CustomButton from "./CustomButton";
import Overline from "@/style/Overline.styles";
import desktopImage from '../assets/home/desktop/image-hero.jpg';
import { useRouter } from 'next/navigation'
import { orangeButtonStyles } from "@/data/buttons";
import { HeroSectionContainerStyles, HeroSectionDescriptionStyles, HeroImageStyles } from "@/style/HeroSection.styles";

function HeroSection() {
    const router = useRouter();

    return (
        <HeroSectionContainerStyles>
            <HeroSectionDescriptionStyles>
                <Overline>new product</Overline>
                <StyledH1>XX99 Mark II Headphones</StyledH1>
                <BodyText>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</BodyText>
                <CustomButton label={'See Product'} styles={orangeButtonStyles} onClick={() => router.push('/asdf')} />
            </HeroSectionDescriptionStyles>
            <HeroImageStyles>
                {/* replace with nextjs Image */}
                <img src={desktopImage.src} alt='headphone image'/>
            </HeroImageStyles>
        </HeroSectionContainerStyles>
    )
}

export default HeroSection;