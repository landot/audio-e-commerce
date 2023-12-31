import { AddQuantityStyles, AddQuantityButtonStyles } from '@/style/AddQuantity.styles';

export interface AddQuantityProps {
    quantity: number;
    handleIncrement: (q: number) => void
}

function AddQuantity(props: AddQuantityProps) {
    return (
        <AddQuantityStyles>
            <AddQuantityButtonStyles role='button' onClick={() => props.handleIncrement(props.quantity > 0 ? -1: 0)}>-</AddQuantityButtonStyles>
            <p>{props.quantity}</p>
            <AddQuantityButtonStyles role='button' onClick={() => props.handleIncrement(1)}>+</AddQuantityButtonStyles>
        </AddQuantityStyles>
    )
}

export default AddQuantity;
