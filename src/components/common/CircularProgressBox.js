import { CircularProgress, Box } from "@mui/material"

const CircularProgressBox = ({ sx }) => {
    return (
        <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'center', ...sx }}>
            <CircularProgress />
        </Box>
    )
}

export default CircularProgressBox