import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { Box, Typography, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { db } from "config/firebase";
import CircularProgressBox from "components/common/CircularProgressBox";

const LogList = (props) => {
    const { update } = props;
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLogs = async () => {
            setLoading(true);
            const temp = [];
            const querySnapshot = await getDocs(collection(db, "guestbook"));
            querySnapshot.forEach(doc => temp.push({ id: doc.id, ...doc.data() }));
            temp.sort((a, b) => a.date > b.date ? -1 : 1);
            setLogs(temp);
            setLoading(false);
        };

        fetchLogs();
    }, [update]);

    const logList = !loading && logs.map(log => {
        const { id, name, message, date } = log;
        const datePart = date.split('-')[0];
        const timePart = date.split('-')[1];

        return (
            <Box key={id} sx={{ mt: 2, mb: 2 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>{message}</Typography>
                <Typography variant="body1" sx={{ color: grey[500], mb: 1 }}>{name} <span style={{ color: grey[700] }}> | {datePart} {timePart}</span></Typography>
                <Divider />
            </Box>
        );
    });

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6">コメントの記録</Typography>
            {loading ? <CircularProgressBox /> : logList}
        </Box>
    )
}

export default LogList