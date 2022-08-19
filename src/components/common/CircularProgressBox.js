import { CircularProgress, Box } from "@mui/material"

const CircularProgressBox = () => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    )
}

export default CircularProgressBox