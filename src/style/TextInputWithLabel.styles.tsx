import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleAndError = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  color: #000;
  font-size: 12px;
  font-weight: 700;
`;

export const Error = styled.p`
  color: #FF0000;
  font-size: 12px;
  font-weight: 500;
`;
