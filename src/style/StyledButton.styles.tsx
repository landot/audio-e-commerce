import ButtonStyles from "@/type/ButtonStyles";
import styled from "styled-components";


export const StyledButton = styled.button<{$styles: ButtonStyles}>`
  padding: 15px 30px;
  text-transform: uppercase;
  color: ${props => props.$styles.textColor};
  background-color: ${props => props.$styles.backgroundColor};
  border: 1px solid ${props => props.$styles.borderColor};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.$styles.hoverTextColor};
    background-color: ${props => props.$styles.hoverBackgroundColor};
    border-color: ${props => props.$styles.hoverBorderColor};
  }
`;