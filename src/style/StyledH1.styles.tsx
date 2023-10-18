import styled from "styled-components";

interface HeaderProps {
    $color?: string;
  }

  
const StyledH1 = styled.h1<HeaderProps>`
    color: ${(props) => (props.$color ? props.$color : '#000')};
    font-family: inherit;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 2px;
    text-transform: uppercase;
`

export default StyledH1;