import moment from 'moment';

export function roundOffDate(inputDate) {
  const roundedDate = new Date(inputDate);
  roundedDate.setMinutes(roundedDate.getMinutes() - (roundedDate.getMinutes() % 10));
  roundedDate.setSeconds(0);
  return roundedDate;
}

export const customTimeSlotFormat = (timeSlot) => {
  const hour = moment(timeSlot).hour();
  const minutes = moment(timeSlot).minutes();
  if (minutes === 0) {
    return `${hour}h`; // Format the time slot as "9h"
  } else {
    return `${hour}h${minutes}`; // Format the time slot as "9h30"
  }
};
