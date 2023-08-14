import StyledTextInput from "@/style/TextInput.styles";
import { InputContainer, TitleAndError, Title, Error } from "@/style/TextInputWithLabel.styles";

export interface TextInputWithLabelProps {
    title: string;
    value: string;
    onChange?: () => void;
    error?: string;
}

function TextInputWithLabel(props: TextInputWithLabelProps) {
    return (
        <InputContainer>
        <TitleAndError>
          <Title>{props.title}</Title>
          {props.error && (
              <Error>{props.error}</Error>
          )}
        </TitleAndError>
        <StyledTextInput value={props.value} onChange={props.onChange}/>
      </InputContainer>
    )
}

export default TextInputWithLabel;
