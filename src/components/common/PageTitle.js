import { Typography } from "@mui/material"

const PageTitle = (props) => {
    const { text, sx, ...others } = props;

    return (
        <Typography variant="h4" sx={{ ...sx, mb: 4 }} {...others}>
            {text}
        </Typography>
    )
}

export default PageTitle