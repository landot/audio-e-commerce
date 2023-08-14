import StyledRadioInput from "@/style/RadioInput.styles";

export function RadioInput(props: { label: string, checked: boolean, handleClick?: () => void })  {
    return (
      <StyledRadioInput $checked={props.checked} onClick={props.handleClick}>
        <input type="radio" checked={props.checked} onClick={props.handleClick} />
        {props.label}
      </StyledRadioInput>
    );
  };
  
  export default RadioInput;