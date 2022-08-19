import { Link } from "@mui/material";
import { blue } from "@mui/material/colors";

const BlankLink = (props) => {
    const { children, ...others } = props;
    return (
        <a
            {...others}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                color: blue[200],
                marginLeft: '0.2rem',
                marginRight: '0.2rem',
                fontWeight: 500,
                fontFamily: "'Roboto', 'Zen Kaku Gothic New'",
            }}
        >
            {children}
        </a>
    );
}

export default BlankLink