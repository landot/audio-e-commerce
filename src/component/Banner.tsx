import StyledH2 from '@/style/StyledH2.styles';
import React from 'react';
import styled from 'styled-components';

interface BannerProps {
    text: string;
}

export const StyledBanner = styled.div`
    background-color: #101010;
    width: 100%;
    padding: 90px 0;

    ${StyledH2} {
        color: #FFFFFF;
        text-align: center;
    }
`

function Banner(props: BannerProps) {
    return (
        <StyledBanner>
            <StyledH2>
                {props.text}
            </StyledH2>
        </StyledBanner>
    )
}

export default Banner;
