import styled from "styled-components"

export const AddQuantityStyles = styled.div`
    width: 120px;
    height; 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    background-color: #F1F1F1;
    padding: 15px;

    p {
        color: #000;
        text-align: center;
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
    }
`

export const AddQuantityButtonStyles = styled.button`
    appearance: none;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    outline: none;
    color: #000;
    opacity: 0.25;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;

    &:hover {
        color: #D87D4A;
        opacity: 1;
    }
`
