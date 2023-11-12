import React from 'react';
import moment from 'moment';
import './index.css';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import { EVENTS } from './Dummydata/CustomCalendar.constants';
import AppointmentEvent from './customComponents/AppointmentEvent';
const localizer = momentLocalizer(moment);
import CalendarButtons from './customComponents/CalendarButtons';

const Calendar = () => {
  React.useEffect(() => {
    const timeSlots = document.querySelectorAll('.rbc-time-slot');

    timeSlots.forEach((timeSlot) => {
      const label = timeSlot.querySelector('.rbc-label');

      // Check if label exists before accessing its style property
      if (label) {
        const time = label.textContent.trim();

        // Modify font size based on condition (e.g., half-hour)
        const fontSize = isHalfHour(time) ? '14px' : '16px';

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

  return (
    <BigCalendar
      localizer={localizer}
      // date={'11-10-2023'}
      defaultView={'week'}
      max={moment('2021-10-10T19:00:00').toDate()}
      min={moment('2021-10-10T09:00:00').toDate()}
      formats={{
        // dayFormat: customDayFormat,
        timeGutterFormat: customTimeSlotFormat, // Apply the custom day format
      }}
      views={['day', 'agenda', 'work_week', 'month', 'week']}
      components={{
        toolbar: CalendarButtons,
        event: AppointmentEvent,
      }}
      timeslots={1}
      events={EVENTS}
    />
  );
};

export default Calendar;
