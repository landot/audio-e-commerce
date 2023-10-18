import speakerImage2Desktop from '../assets/home/desktop/image-speaker-zx7.jpg';
import speakerImage2Tablet from '../assets/home/tablet/image-speaker-zx7.jpg';
import speakerImage2Mobile from '../assets/home/mobile/image-speaker-zx7.jpg';
import earphoneImageDesktop from '../assets/home/desktop/image-earphones-yx1.jpg';
import earphoneImageTablet from '../assets/home/tablet/image-earphones-yx1.jpg';
import earphoneImageMobile from '../assets/home/mobile/image-earphones-yx1.jpg';
import styled from 'styled-components';
import { StyledButton } from './StyledButton.styles';
import BodyText from './BodyText.styles';
import StyledH1 from './StyledH1.styles';

export const PromotionStyles = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const ZX9SpeakerPromotion = styled.div`
    padding: 80px;
    width: 100%;
    height: fit-content;
    border-radius: 8px;
    background: #D87D4A;
    display: flex;
    justify-content: flex-end;
    gap: 80px;

    @media (max-width: 800px) {
        padding: 55px 24px;
        gap: 64px;
        flex-direction: column;
        align-items: center;
    }
    
    @media (max-width: 500px) {
        gap: 32px;
    }
`

export const SpeakerImageContainer1 = styled.div`
    width: 50%;
`

export const ZX9SpeakerContentStyles = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;

    ${StyledButton} {
        margin-top: 40px;
    }

    ${BodyText} {
        margin-top: 24px;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: 100%;

        ${StyledH1}, ${BodyText} {
            text-align: center;
        }
    }
    
    @media (max-width: 500px) {
    }
`

export const ZX7SpeakerPromotion = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 320px;
    background-image: url(${speakerImage2Desktop.src});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    padding-left: 80px;

    ${StyledButton} {
        margin-top: 32px;
    }

    @media (max-width: 800px) {
        background-image: url(${speakerImage2Tablet.src});
    }
    
    @media (max-width: 500px) {
        background-image: url(${speakerImage2Mobile.src});
        height: 540px;
    }
`

export const EarphonePromotion = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    height: 100%;
    max-height: 320px;
        
    @media (max-width: 500px) {
        max-height: 600px;
        height: 100%;
        flex-direction: column;
    }
`

export const EarphoneDetails = styled.div`
    border-radius: 8px;
    width: 50%;
    height: 100%;
    background: #F1F1F1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 90px;
    gap: 32px;

    @media (max-width: 500px) {
        max-height: 200px;
        width: 100%;
    }
`

export const EarphoneImage = styled.div`
    border-radius: 8px;
    width: 50%;
    height: 100%;
    max-height: 320px;
    background-image: url(${earphoneImageDesktop.src});
    background-size: cover;
    background-repeat: no-repeat;


    @media (max-width: 800px) {
        background-image: url(${earphoneImageTablet.src});
    }
    
    @media (max-width: 500px) {
        background-image: url(${earphoneImageMobile.src});
        width: 100%;
        max-height: 200px;
    }
`
