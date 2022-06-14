import { Container as MuiContainer } from "@mui/material"

const Container = ({ children }) => {
    return (
        <MuiContainer maxWidth="lg" sx={{ mt: 10, pb: 2 }}>
            {children}
        </MuiContainer>
    )
}

export default Container