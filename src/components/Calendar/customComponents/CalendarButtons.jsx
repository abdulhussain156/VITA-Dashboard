import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  HistoryToggleOff as HistoryToggleOffIcon,
  PersonalVideo as PersonalVideoIcon,
} from '@mui/icons-material';
import { Calendar as BigCalendar, momentLocalizer, Navigate } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useReasonsContext } from 'src/context/ReasonsContext';

const localizer = momentLocalizer(moment);

const buttons = [
  { french: 'Jour', english: 'Day' },
  { french: 'Semaine', english: 'work_week' },
  { french: 'Mois', english: 'Month' },
];

const CalendarButtons = (props) => {
  const [active, setActive] = useState('work_week');
  const { showReasons } = useReasonsContext();

  useEffect(() => {
    props.onView(props.view);
  }, []);
  const handleViewChange = (view) => {
    setActive(view);
    // Find the corresponding English text for the given French text
    const englishText = buttons.find((button) => button.french === view)?.english || view;
    props.onView(englishText);
  };

  const goToNext = () => {
    props.onNavigate(Navigate.NEXT);
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
      {showReasons ? (
        <Box display="flex" alignItems="center" sx={{ width: '100%' }}>
          <Box sx={{ flex: 0.7 }}>
            <Typography variant="h6" color="error" fontWeight={800} textAlign="center">
              Annuler
            </Typography>
          </Box>
          <Box sx={{ flex: 0.3 }}>
            <Button
              onClick={() => goToNext()}
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              sx={{ borderRadius: '15px' }}
            >
              Autre disponibilité
            </Button>
          </Box>
        </Box>
      ) : (
        <>
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
              sx={{
                borderRadius: '50%',
                p: 1,
                bgcolor: 'rgba(224, 224, 224, 1)',
                fontSize: '40px',
              }}
            />
            <PersonalVideoIcon
              color="primary.dark"
              sx={{
                borderRadius: '50%',
                p: 1,
                bgcolor: 'rgba(224, 224, 224, 1)',
                fontSize: '40px',
              }}
            />
            <Button variant="contained" color="primary" sx={{ borderRadius: '15px' }}>
              Plage horaire
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CalendarButtons;
