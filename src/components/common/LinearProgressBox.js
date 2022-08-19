import { Box, LinearProgress } from "@mui/material"

const LinearProgressBox = ({ ...others }) => {
    return (
        <Box {...others}>
            <LinearProgress />
        </Box>
    )
}

export default LinearProgressBox