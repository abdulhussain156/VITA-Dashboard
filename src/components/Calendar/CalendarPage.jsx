import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarMonth from './sidebar/CalendarMonth';
import NewAppointment from './sidebar/NewAppointment/NewAppointment';
import DoctorList from './sidebar/DoctorsList/DoctorList';
import Calendar from './Calendar';
import { useCalendarContext } from '../context/CalendarContext';
import MainRendezvous from './sidebar/Rendezvous/MainRendezvous';

const CalendarPage = () => {
  const { show } = useCalendarContext();
  console.log(show);
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid
        item
        xs={12}
        sm={4}
        md={3}
        lg={2}
        sx={{ position: 'sticky', height: '100vh', overflowY: 'auto', width: '100%' }}
      >
        <CalendarMonth />
        <NewAppointment />
        {show ? <MainRendezvous /> : <DoctorList />}
      </Grid>

      {/* Main Content */}
      <Grid
        item
        xs={12}
        sm={8}
        md={9}
        lg={10}
        sx={{
          // marginLeft: { sm: '200px', md: '300px', lg: '310px' },
          padding: 2,
        }}
      >
        <Calendar />
      </Grid>
    </Grid>
  );
};

export default CalendarPage;
