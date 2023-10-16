import ButtonStyles from "@/type/ButtonStyles";
import styled from "styled-components";


export const StyledButton = styled.button<{$styles: ButtonStyles}>`
  padding: 15px 30px;

  text-transform: uppercase;
  width: ${props => props.$styles.width ? props.$styles.width: 'fit-content'};
  color: ${props => props.$styles.textColor};
  background-color: ${props => props.$styles.backgroundColor};
  border: ${props => props.$styles.borderColor ? `1px solid ${props.$styles.borderColor}`: 'none'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    color: ${props => props.$styles.hoverTextColor};
    background-color: ${props => props.$styles.hoverBackgroundColor};
    border: ${props => props.$styles.hoverBorderColor ? `1px solid ${props.$styles.hoverBorderColor}`: 'none'};
  }
`;