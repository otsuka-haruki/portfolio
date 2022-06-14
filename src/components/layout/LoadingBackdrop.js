import { Backdrop, LinearProgress, Box } from "@mui/material"

const LoadingBackdrop = ({ open }) => {
    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <Box sx={{ width: '80%' }}>
                <LinearProgress />
            </Box>
        </Backdrop>
    )
}

export default LoadingBackdrop