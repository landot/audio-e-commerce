import Image from "next/image";
import speakerImage1 from '../assets/home/desktop/image-speaker-zx9.png';
import StyledH1 from "@/style/StyledH1.styles";
import BodyText from "@/style/BodyText.styles";
import CustomButton from "./CustomButton";
import { blackButtonStyles, clearButtonStyles } from "@/data/buttons";
import StyledH4 from "@/style/StyledH4.styles";
import { PromotionStyles, ZX9SpeakerPromotion, SpeakerImageContainer1, ZX9SpeakerContentStyles, ZX7SpeakerPromotion, EarphonePromotion, EarphoneImage, EarphoneDetails } from "@/style/Promotion.styles";

function Promotion() {
    return (
        <PromotionStyles>
            <ZX9SpeakerPromotion>
                <SpeakerImageContainer1>
                    <Image src={speakerImage1} alt={"ZX9 Speaker Image"} layout='responsive' objectFit="cover"/>
                </SpeakerImageContainer1>
                <ZX9SpeakerContentStyles>
                    <StyledH1 $color='#FFF'>ZX9 Speaker</StyledH1>
                    <BodyText $color='#FFF' $opacity={.75}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</BodyText>
                    <CustomButton label={"See Product"} styles={blackButtonStyles} />
                </ZX9SpeakerContentStyles>
            </ZX9SpeakerPromotion>
            <ZX7SpeakerPromotion>
                <StyledH4>ZX7 Speaker</StyledH4>
                <CustomButton label={"See Product"} styles={clearButtonStyles} />
            </ZX7SpeakerPromotion>
            <EarphonePromotion>
                <EarphoneImage />
                <EarphoneDetails>
                    <StyledH4>YX1 Earphones</StyledH4>
                    <CustomButton label={"See Product"} styles={clearButtonStyles} />
                </EarphoneDetails>
            </EarphonePromotion>
        </PromotionStyles>
    )
}

export default Promotion;
