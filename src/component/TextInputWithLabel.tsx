import StyledTextInput from "@/style/TextInput.styles";
import { InputContainer, TitleAndError, Title, Error } from "@/style/TextInputWithLabel.styles";

function TextInputWithLabel(props: {title: string, error?: string}) {
    return (
        <InputContainer>
        <TitleAndError>
          <Title>{props.title}</Title>
          <Error>{props.error}</Error>
        </TitleAndError>
        <StyledTextInput/>
      </InputContainer>
    )
}

export default TextInputWithLabel;
