import { GoBackStyles } from "@/style/GoBack.styles";
import Link from "next/link";

function GoBack(props: {href: string}) {
    return (
        <Link href={props.href}>
            <GoBackStyles>Go Back</GoBackStyles>
        </Link>
    )
}

export default GoBack;