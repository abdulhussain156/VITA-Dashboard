import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import Patients from './Patients';
import PieChart from './PieChart';

const PoseDeProthese = ({ name, patients, total, pieArray, pieName }) => {
  return (
    <Box mb={5}>
      <Paper elevation={5} sx={{ p: 5, borderRadius: '20px' }}>
        <Grid container>
          <Grid item lg={12}>
            <Typography variant="h6" color="secondary" align="left">
              {name}
            </Typography>
            <Typography variant="body1" color="primary.contrastText" align="left">
              ({patients.length} RDV)
            </Typography>
          </Grid>
        </Grid>
        <Grid container mt={2} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Grid container spacing={3}>
              {patients.map((item, index) => (
                <Grid item xs={6} sm={6} md={4} lg={4} key={index}>
                  <Patients name={item.name} details={item.title} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <PieChart
              name={name}
              totalPatients={patients.length}
              pieArray={pieArray}
              pieName={pieName}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PoseDeProthese;
