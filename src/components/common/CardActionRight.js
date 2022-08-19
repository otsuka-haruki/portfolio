import { CardActions } from "@mui/material"

const CardActionRight = ({ children }) => {
    return (
        <CardActions sx={{ display: 'flex', justifyContent: 'end', gap: 1 }}>
            {children}
        </CardActions>
    )
}

export default CardActionRight