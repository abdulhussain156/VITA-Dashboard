import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './index.css';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import { EVENTS } from './Dummydata/CustomCalendar.constants';
import AppointmentEvent from './customComponents/AppointmentEvent';
const localizer = momentLocalizer(moment);
import CalendarButtons from './customComponents/CalendarButtons';

import { getAvailableSlotsForDates } from './helpers/GetavailableSlots';
import useCalendar from './helpers/hooks/useCalendar';
import useAppointment from './helpers/hooks/useAppointment';
import AddAppointmentSlot from './Dialogs/AddAppointment/AddAppointmentSlot';
import { useCalendarContext } from '../../context/CalendarContext';
import dayjs from 'dayjs';
import { useReasonsContext } from 'src/context/ReasonsContext';

const Calendar = () => {
  const {
    customTimeSlotFormat,
    onNavigate,
    dateRange,
    appointments,
    calendarview,
    setCalendarView,
  } = useCalendar();
  const { open, setOpen, handleClickOpen } = useCalendarContext();
  const [currentDate, setCurrentDate] = useState(new Date());
  const { showReasons } = useReasonsContext();
  useEffect(() => {
    const dayName = moment(currentDate).format('dddd');
  }, []);

  return (
    <>
      <BigCalendar
        localizer={localizer}
        selectable
        onSelectSlot={handleClickOpen}
        // date={'11-20-2023'}
        defaultView={calendarview}
        max={moment('2021-10-10T21:00:00').toDate()}
        min={moment('2021-10-10T09:00:00').toDate()}
        onRangeChange={(range) => {
          onNavigate(range, calendarview);
        }}
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
        events={showReasons ? appointments : EVENTS}
        // onNavigate={onNavigate}
      />
      <AddAppointmentSlot open={open} setOpen={setOpen} />
    </>
  );
};

export default Calendar;

const selectedDates = [
  '2023-11-19T19:00:00.000Z',
  '2023-11-20T19:00:00.000Z',
  '2023-11-21T19:00:00.000Z',
  '2023-11-22T19:00:00.000Z',
  '2023-11-23T19:00:00.000Z',
];
