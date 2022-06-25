import { CardContent, Typography, TextField, Button, Grid } from "@mui/material";
import DefaultCard from "components/common/DefaultCard";
import { useEffect, useState } from "react";

const InputCard = (props) => {
    const { careerData, editTargetId } = props;
    const [previousData, setPreviousData] = useState({});

    useEffect(() => {
        const targetPrevData = careerData.find(career => career._id === editTargetId);
        setPreviousData(targetPrevData);
    }, [editTargetId]);

    return (
        <DefaultCard sx={{ mb: 4 }}>
            <CardContent>
                <Typography variant="h6">Edit</Typography>
                <Grid container spacing={2} sx={{ mt: 0, mb: 2 }}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="組織名" required />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="役割" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="場所" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="始めた時期" helperText='yyyy/mm' />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="終えた時期" helperText='yyyy/mm or empty' />
                    </Grid>
                </Grid>
                <Button variant="contained" fullWidth>Submit</Button>
            </CardContent>
        </DefaultCard>
    )
}

export default InputCard