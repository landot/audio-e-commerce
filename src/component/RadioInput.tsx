import StyledRadioInput from "@/style/RadioInput.styles";

export function RadioInput(props: { label: string })  {
    return (
      <StyledRadioInput>
        <input type="radio" />
        {props.label}
      </StyledRadioInput>
    );
  };
  
  export default RadioInput;