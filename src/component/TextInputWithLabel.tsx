import StyledTextInput from "@/style/TextInput.styles";
import { InputContainer, TitleAndError, Title, Error } from "@/style/TextInputWithLabel.styles";

export interface TextInputWithLabelProps {
    title: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

function TextInputWithLabel(props: TextInputWithLabelProps) {
    return (
        <InputContainer>
        <TitleAndError>
          <Title aria-label={props.title}>{props.title}</Title>
          {props.error && (
              <Error aria-label="error text">{props.error}</Error>
          )}
        </TitleAndError>
        <StyledTextInput aria-labelledby={props.title} value={props.value} onChange={props.onChange} role='textbox'/>
      </InputContainer>
    )
}

export default TextInputWithLabel;
