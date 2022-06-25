import { Card, CardContent } from "@mui/material"
import { grey } from "@mui/material/colors";

const DefaultCard = (props) => {
    const { children, sx, ...others } = props;

    return (
        <Card sx={{ bgcolor: grey[200], ...sx }}  {...others}>
            {children}
        </Card>
    )
}

export default DefaultCard