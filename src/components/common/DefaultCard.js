import { Card, CardContent } from "@mui/material"
import { grey } from "@mui/material/colors";

const DefaultCard = (props) => {
    const { children, ...others } = props;

    return (
        <Card sx={{ bgcolor: grey[200] }}>
            {children}
        </Card>
    )
}

export default DefaultCard