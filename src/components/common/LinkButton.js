import Link from "next/link";
import { Button } from "@mui/material";

const LinkButton = (props) => {
    const { href, children, ...others } = props;

    return (
        <Link href={href}>
            <Button {...others} >
                <a>{children}</a>
            </Button>
        </Link>
    )
}

export default LinkButton