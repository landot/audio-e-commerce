import styled from "styled-components";

const StyledRadioInput = styled.label<{ $checked: boolean }>`
  padding: 18px 16px;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  border: ${(p) => p.$checked? '1px solid #D87D4A': '1px solid #CFCFCF'};
  background: #FFF;
  color: #000;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.3s ease;

  input[type="radio"] {
    accent-color: #D87D4A;
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
    transform: scale(1.5);
  }

  &:hover {
    border: 1px solid #D87D4A;
  }
`;

export default StyledRadioInput;