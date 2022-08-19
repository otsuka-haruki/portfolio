import { Typography } from "@mui/material"

const PageTitle = (props) => {
    const { children, sx, ...others } = props;

    return (
        <Typography variant="h5" sx={{ ...sx, mb: 4, fontWeight: 500 }} {...others}>
            {children}
        </Typography>
    )
}

export default PageTitle