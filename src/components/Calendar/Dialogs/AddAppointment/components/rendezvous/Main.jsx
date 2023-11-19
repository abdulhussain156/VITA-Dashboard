import React from 'react';
import Reasons from './Reasons';
import { Box, Divider, Grid, Paper } from '@mui/material';
import Agenda from './Agenda';
import PatientsForm from './PatientsForm';
import Fees from './Fees';

const Main = () => {
  return (
    <Box>
      <Grid container mt={4} mb={4} pr={5}>
        <Grid item lg={8}>
          <Reasons />
        </Grid>
        <Grid item lg={4}>
          <Agenda />
        </Grid>
      </Grid>
      <Divider sx={{ borderBottomWidth: 2, bgcolor: 'rgba(183, 183, 183, 1)' }} />
      <Grid container>
        <Grid item lg={7}>
          <PatientsForm />
        </Grid>
        <Grid item lg={5}>
          <Fees />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
