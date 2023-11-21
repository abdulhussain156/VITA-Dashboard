import React from 'react';
import dates from 'react-big-calendar/lib/utils/dates';
import moment from 'moment';
import { EVENTS } from '../../Dummydata/CustomCalendar.constants';
import { getAvailableSlotsForDates } from '../GetavailableSlots';
const useCalendar = () => {
  const [appointments, setAppointMents] = React.useState([]);
  const [calendarview, setCalendarView] = React.useState('work_week');

  React.useEffect(() => {
    const timeSlots = document.querySelectorAll('.rbc-time-slot');

    timeSlots.forEach((timeSlot) => {
      const label = timeSlot.querySelector('.rbc-label');

      // Check if label exists before accessing its style property
      if (label) {
        const time = label.textContent.trim();

        // Modify font size based on condition (e.g., half-hour)
        const fontSize = isHalfHour(time) ? '13px' : '15px';

        // Check if style property exists before modifying fontSize
        if (label.style) {
          label.style.fontSize = fontSize;
        }
      }
    });
  }, []);

  // Function to check if the hour is on the half-hour
  const isHalfHour = (time) => {
    const minutes = parseInt(time.slice(-2));
    return minutes === 30;
  };
  const customDayFormat = ({ date, culture, localizer }) => {
    console.log(date);
    return moment(date).format('D MMM YYYY'); // Format the day as "8 Nov 2023"
  };

  const customTimeSlotFormat = (timeSlot) => {
    const hour = moment(timeSlot).hour();
    const minutes = moment(timeSlot).minutes();
    if (minutes === 0) {
      return `${hour}h`; // Format the time slot as "9h"
    } else {
      return `${hour}h${minutes}`; // Format the time slot as "9h30"
    }
  };

  const onNavigate = (date, view, action) => {
    if (view === 'work_week') {
      const availableSlotsForDates = getAvailableSlotsForDates(EVENTS, date);
      const newApp = [...EVENTS, ...availableSlotsForDates];
      setAppointMents(newApp);
    } else {
      setAppointMents([]);
    }
  };
  return {
    isHalfHour,
    customDayFormat,
    customTimeSlotFormat,
    onNavigate,
    appointments,
    calendarview,
    setCalendarView,
    calendarview,
    setCalendarView,
  };
};

export default useCalendar;
