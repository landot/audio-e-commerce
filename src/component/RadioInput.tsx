import { StyledRadioContainer } from "@/style/RadioInput.styles";

export interface RadioInputProps {
  label: string;
  checked: boolean;
  handleClick?: () => void;
}

function RadioInput(props: RadioInputProps)  {
    return (
        <StyledRadioContainer $checked={props.checked} onClick={props.handleClick}>
            <input aria-label={props.label} type="radio" checked={props.checked} readOnly={true} />
            <label aria-labelledby={props.label}>
                {props.label}
            </label>
        </StyledRadioContainer>
    );
};
  
export default RadioInput;