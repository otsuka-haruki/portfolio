import { Card, CardActions } from "@mui/material"

export const CardActionRight = ({ children }) => {
    return (
        <CardActions sx={{ display: 'flex', justifyContent: 'end', gap: 1 }}>
            {children}
        </CardActions>
    )
}

export const DefaultCard = ({ children, sx, ...others }) => {
    return (
        <Card sx={{ ...sx }}  {...others}>
            {children}
        </Card>
    )
}