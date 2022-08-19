import { Card, CardContent } from "@mui/material"
import { grey } from "@mui/material/colors";

const DefaultCard = (props) => {
    const { children, sx, ...others } = props;

    return (
        <Card sx={{ ...sx }}  {...others}>
            {children}
        </Card>
    )
}

export default DefaultCard