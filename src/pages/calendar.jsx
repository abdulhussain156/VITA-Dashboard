import React from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import CalendarPage from 'src/components/Calendar/CalendarPage';
import { CalendarProvider } from 'src/context/CalendarContext';

const calendar = () => {
  return (
    <CalendarProvider>
      <CalendarPage />
    </CalendarProvider>
  );
};

export default calendar;
