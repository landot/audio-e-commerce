import styled from 'styled-components';

interface BodyTextProps {
  $color?: string;
  $opacity?: number;
  $textTransform?: string;
  $fontWeight?: number;
}

const BodyText = styled.p<BodyTextProps>`
  color: ${(props) => (props.$color ? props.color : '#000')};
  opacity: ${(props) => (props.$opacity ? props.$opacity : 1.0)};
  text-transform: ${(props) => (props.$textTransform ? props.$textTransform : 'none')};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 500)};
  font-family: Manrope, sans-serif;
  font-size: 15px;
  font-style: normal;
  line-height: 25px;
`;

export default BodyText;
