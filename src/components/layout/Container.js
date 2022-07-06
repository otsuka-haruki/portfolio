import { Container as MuiContainer, Toolbar } from "@mui/material"

const Container = ({ children }) => {
    return (
        <MuiContainer maxWidth="md" sx={{ mt: 2 }}>
            {children}
        </MuiContainer>
    )
}

export default Container