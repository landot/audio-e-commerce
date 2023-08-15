import styled from "styled-components";

export const StyledRadioContainer = styled.div<{ $checked: boolean }>`
  padding: 18px 16px;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  border: ${(p) => p.$checked? '1px solid #D87D4A': '1px solid #CFCFCF'};
  background: #FFF;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.3s ease;

  label {
    cursor: pointer;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }

  input[type="radio"] {
    cursor: pointer;
    accent-color: #D87D4A;
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
    transform: scale(1.5);
  }

  &:hover {
    border: 1px solid #D87D4A;
  }
`;
