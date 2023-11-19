import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Button } from '@mui/material';
const CalendarMonth = () => {
  return (
    <Box ml={2} mt={1} p={2}>
      <Button fullWidth variant="contained" color="primary" sx={{ borderRadius: '15px' }}>
        Aujourd’hui
      </Button>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
            width: '100%', // Set the desired width
            height: '200px',
            mt: 1,
            '& .MuiDayCalendar-header': {
              display: 'none',
            },

            '& .MuiPickersCalendarHeader-root': {
              m: 0,
            },
            '& .MuiDayCalendar-monthContainer': {
              p: 1,
              backgroundColor: 'rgba(241, 241, 241, 1)',
              borderRadius: '10px',
            },
            '& .MuiPickersCalendarHeader-label': {
              fontSize: '13px',
            },
            '& .MuiDayCalendar-weekContainer': {
              m: 0,
            },
            '& .MuiPickersDay-root': {
              m: '2px',
              width: '22px',
              height: '22px',
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default CalendarMonth;
