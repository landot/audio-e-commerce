import styled from 'styled-components';

interface BodyTextProps {
  color?: string;
  opacity?: number;
}

const BodyText = styled.p<BodyTextProps>`
  color: ${(props) => (props.color ? props.color : '#000')};
  opacity: ${(props) => (props.opacity ? props.opacity : 1.0)};
  font-family: Manrope, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
`;

export default BodyText;
