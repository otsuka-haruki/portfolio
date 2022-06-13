import { Container as MuiContainer } from "@mui/material"

const Container = ({ children }) => {
    return (
        <MuiContainer maxWidth="lg" sx={{ mt: 10 }}>
            {children}
        </MuiContainer>
    )
}

export default Container