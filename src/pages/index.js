import { useState } from 'react';
import { Button, Typography, Box, CircularProgress } from '@mui/material';

const Index = () => {
  const [demoData, setDemoData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchFromDatabase = async () => {
    setIsFetching(true);
    const response = await fetch('/api/hello');
    const result = await response.json();
    setDemoData(result.result);
    setIsFetching(false);
  }

  return (
    <>
      <Button variant="outlined" onClick={fetchFromDatabase}>Action</Button>
      {isFetching &&
        <Box>
          <CircularProgress />
        </Box>}
      {!isFetching && demoData.length !== 0 && <Typography variant="body1">{demoData[0].organization}</Typography>}
    </>
  )
}

export default Index