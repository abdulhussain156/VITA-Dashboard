import moment from 'moment';
export function getAvailableSlotsForDates(dataArray, selectedDates) {
  const allSlots = [];

  selectedDates.forEach((selectedDate) => {
    const date = moment(selectedDate);

    for (let hour = 9; hour < 19; hour++) {
      const startTime = moment({
        year: date.year(),
        month: date.month(),
        date: date.date(),
        hour,
        minute: 1,
      }).toDate();
      const endTime = moment({
        year: date.year(),
        month: date.month(),
        date: date.date(),
        hour,
        minute: 29,
      }).toDate();

      const isSlotAvailable = dataArray.every(
        (appointment) =>
          !(
            moment(appointment.start).isSameOrBefore(endTime) &&
            moment(appointment.end).isSameOrAfter(startTime)
          )
      );

      if (isSlotAvailable) {
        allSlots.push({
          start: startTime,
          end: endTime,
          data: {
            appointment: {
              status: 'N',
            },
          },
          isDraggable: true,
        });
      }

      const startTimeSecondSlot = moment({
        year: date.year(),
        month: date.month(),
        date: date.date(),
        hour,
        minute: 31,
      }).toDate();
      const endTimeSecondSlot = moment({
        year: date.year(),
        month: date.month(),
        date: date.date(),
        hour,
        minute: 59,
      }).toDate();

      const isSecondSlotAvailable = dataArray.every(
        (appointment) =>
          !(
            moment(appointment.start).isSameOrBefore(endTimeSecondSlot) &&
            moment(appointment.end).isSameOrAfter(startTimeSecondSlot)
          )
      );

      if (isSecondSlotAvailable) {
        allSlots.push({
          start: startTimeSecondSlot,
          end: endTimeSecondSlot,
          data: {
            appointment: {
              status: 'N',
            },
          },
          isDraggable: true,
        });
      }
    }
  });

  return allSlots;
}
