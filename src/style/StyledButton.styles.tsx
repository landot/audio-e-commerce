import ButtonStyles from "@/type/ButtonStyles";
import styled from "styled-components";


export const StyledButton = styled.button<ButtonStyles>`
  padding: 15px 30px;
  text-transform: uppercase;
  color: ${props => props.textColor};
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.hoverTextColor};
    background-color: ${props => props.hoverBackgroundColor};
    border-color: ${props => props.hoverBorderColor};
  }
`;