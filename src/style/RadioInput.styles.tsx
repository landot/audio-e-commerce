import styled from "styled-components";

const StyledRadioInput = styled.label`
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #CFCFCF;
  background: #FFF;
  color: #000;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.3s ease;

  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    border-radius: 50%;
    border: 2px solid #D87D4A;
    background-color: #FFF;
    transition: background-color 0.3s ease;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + &::before {
    background-color: #D87D4A;
  }

  &:hover {
    border-color: #D87D4A;
  }
`;

export default StyledRadioInput;