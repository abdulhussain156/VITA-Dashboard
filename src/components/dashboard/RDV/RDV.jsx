'use client';
import React from 'react';
import { Box, Typography, Grid, ButtonBase } from '@mui/material';
import RDVDoctorCard from 'src/components/cards/Doctor/RDVDoctorCard';
import ImportantAppointmentDialog from '../dialog/ImportantAppointments/ImportantAppointmentDialog';
const doctorData = [
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
    description: 'Implant sur 16 et 17, prévoir greffe osseuse',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
    description: 'Implant sur 16 et 17, prévoir greffe osseuse',
  },
];
const RDV = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box>
      <Typography variant="h4" color="secondary" gutterBottom>
        RDV important
      </Typography>
      <Box
        onClick={handleClickOpen}
        sx={{
          p: 2,
          m: 2,
          width: '100%',
          borderRadius: '10px',
          background: '#FFFFFF',
          boxShadow: 'none',
          cursor: 'pointer',
        }}
      >
        <Grid container spacing={3}>
          {doctorData.map((item, index) => (
            <Grid item lg={6} key={index}>
              <RDVDoctorCard name={item.name} title={item.title} description={item.description} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <ImportantAppointmentDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default RDV;
