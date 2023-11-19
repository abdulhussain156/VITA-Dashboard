import React from 'react';
import { Box, Divider, Grid, Paper } from '@mui/material';
import Absence from './Absence';
import Agenda from '../rendezvous/Agenda';
import Motif from './Motif';
import RepeatAbsence from './RepeatAbsence';

const MainAbsence = () => {
  return (
    <Box>
      <Grid container mt={4} mb={4} pr={5}>
        <Grid item lg={8}>
          <Absence />
        </Grid>
        <Grid item lg={4}>
          <Agenda />
        </Grid>
      </Grid>
      <Divider variant="middle" sx={{ borderBottomWidth: 2, bgcolor: 'rgba(183, 183, 183, 1)' }} />
      <Grid container>
        <Grid item lg={12}>
          <Motif />
        </Grid>
        <Grid item lg={12}>
          <RepeatAbsence />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainAbsence;
