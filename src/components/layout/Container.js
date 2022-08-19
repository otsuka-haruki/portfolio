import { Container as MuiContainer, Toolbar } from "@mui/material"

const Container = ({ children }) => {
    return (
        <MuiContainer maxWidth="md" sx={{ mt: 2, pl: { xs: 4 }, pr: { xs: 4 } }}>
            {children}
        </MuiContainer>
    )
}

export default Container