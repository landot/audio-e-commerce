import styled from "styled-components"
import BodyText from "./BodyText.styles"
import StyledH2 from "./StyledH2.styles"

export const Orange = styled.span`
    color: #D87D4A;
`

export const CompanyMessageContainerStyles = styled.div`
    display: flex;
    gap: 100px;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
        align-items: center;
        gap: 50px;

        ${StyledH2}, ${BodyText} {
            text-align: center;
        }
    }
    
    @media (max-width: 500px) {
        gap: 40px;
        h4 {
            text-align: center;
        }
    }
`

export const CompanyMessageStyles = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    @media (max-width: 800px) {
        gap: 32px;
    }
`

export const CompanyMessageImageStyles = styled.div`
    flex: 1;
    img {
        width: 100%;
        height: 100%;
    }
`
