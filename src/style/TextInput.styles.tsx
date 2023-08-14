import styled from 'styled-components';

const StyledTextInput = styled.input`
  outline: none;
  border-radius: 8px;
  border: 1px solid #CFCFCF;
  background: #FFF;
  color: #000;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
  padding: 10px;
  transition: border-color 0.3s ease;

  &::placeholder {
    opacity: 0.4;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }

  &:focus {
    border-color: #D87D4A;
  }
`;

export default StyledTextInput;
