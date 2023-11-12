import { faker } from '@faker-js/faker';
import { Box, Grid } from '@mui/material';
import CustomizedProgressBars from 'src/components/dashboard/ProgressBar/ProgressBar';
import RDV from 'src/components/dashboard/RDV/RDV';
import PatientsGraph from 'src/components/dashboard/graphs/PatientsGraph';
import RDVChart from 'src/components/dashboard/graphs/RDVChart';
import List from 'src/components/dashboard/list/List';
import Overview from 'src/components/dashboard/overview/Overview';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Box m={2}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <Overview />
          <PatientsGraph />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <List />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <RDV />
          <CustomizedProgressBars />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RDVChart />
        </Grid>
      </Grid>
    </Box>
  );
}
