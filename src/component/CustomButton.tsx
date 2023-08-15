import { StyledButton } from "@/style/StyledButton.styles";
import ButtonStyles from "@/type/ButtonStyles";

function CustomButton(props: {
    label: string,
    styles: ButtonStyles,
    onClick?: () => void
}) {
    return (
        <StyledButton $styles={props.styles} onClick={props.onClick}>{props.label}</StyledButton>
    )
}


export default CustomButton;
