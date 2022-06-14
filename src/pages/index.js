import { useState } from 'react';
import { Button, Typography, Box, CircularProgress } from '@mui/material';

const Index = () => {
  const [demoData, setDemoData] = useState([]);

  const testDatabase = async () => {
    const response = await fetch('/api/hello');
    const result = await response.json();
    setDemoData(result.result);
  }

  return (
    <>
      <Button variant="outlined" onClick={testDatabase}>Action</Button>
      {demoData.length === 0 && <Box>
        <CircularProgress />
      </Box>}
      {demoData.length !== 0 && <Typography variant="body1">{demoData[0].organization}</Typography>}
    </>
  )
}

export default Index