import { CircularProgress, Box } from "@mui/material"

const CircularProgressBox = ({ sx }) => {
    return (
        <Box sx={{ ...sx, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    )
}

export default CircularProgressBox