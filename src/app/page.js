import LatestNews from '@/components/ui/LatestNews/LatestNews';
import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <h1>Sidebar</h1>
        </Grid>

      </Grid>
    </div>
  );
};

export default HomePage;