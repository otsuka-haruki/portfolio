import { Container as MuiContainer, Toolbar } from "@mui/material"

const Container = ({ children }) => {
    return (
        <MuiContainer maxWidth="md" sx={{ mt: 2, pl: { xs: 3.5 }, pr: { xs: 3.5 } }}>
            {children}
        </MuiContainer>
    )
}

export default Container