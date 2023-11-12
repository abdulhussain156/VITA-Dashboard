import { Box, Button, Typography } from '@mui/material';
import {
  HistoryToggleOff as HistoryToggleOffIcon,
  PersonalVideo as PersonalVideoIcon,
} from '@mui/icons-material';
import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const buttons = [
  { french: 'Jour', english: 'Day' },
  { french: 'Semaine', english: 'Work_week' },
  { french: 'Mois', english: 'Month' },
];

const CalendarButtons = (props) => {
  const [active, setActive] = useState('work_week');

  const handleViewChange = (view) => {
    setActive(view);
    // Find the corresponding English text for the given French text
    const englishText = buttons.find((button) => button.french === view)?.english || view;
    props.onView(englishText);
  };

  return (
    <Box
      m={2}
      p={2}
      sx={{
        display: 'flex',
        marginLeft: '5rem',
        gap: '10px',
        background: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" fontWeight={800}>
        {props.label}
      </Typography>
      <Box
        sx={{
          borderRadius: '10px',
          backgroundColor: '#E6E6E6',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
          gap: '5px',
          padding: '5px 10px 5px 10px',
        }}
      >
        {buttons.map((button) => (
          <Button
            key={button.french}
            onClick={() => handleViewChange(button.english.toLowerCase())}
            sx={{
              color: '#717171',
              textAlign: 'center',
              alignSelf: 'center',
              margin: 'auto 0',
              fontWeight: 500,
              fontSize: '15px',
              bgcolor: active === button.english.toLowerCase() ? '#FFFFFF' : '',
              boxShadow:
                active === button.english.toLowerCase() && '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            {button.french}
          </Button>
        ))}
      </Box>
      <Box display="flex" gap={1}>
        <HistoryToggleOffIcon
          color="primary.dark"
          sx={{ borderRadius: '50%', p: 1, bgcolor: 'rgba(224, 224, 224, 1)', fontSize: '40px' }}
        />
        <PersonalVideoIcon
          color="primary.dark"
          sx={{ borderRadius: '50%', p: 1, bgcolor: 'rgba(224, 224, 224, 1)', fontSize: '40px' }}
        />
        <Button variant="contained" color="primary" sx={{ borderRadius: '15px' }}>
          Plage horaire
        </Button>
      </Box>
    </Box>
  );
};

export default CalendarButtons;
