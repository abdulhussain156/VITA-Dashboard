import React from 'react';

import { EVENT_STATUS_COLORS } from '../Dummydata/CustomCalendar.constants';
import { Box, Button, Popover, Typography } from '@mui/material';
import PopOverContent from './PopOverContent';
import { usePopupState, bindContextMenu, bindPopover } from 'material-ui-popup-state/hooks';
import { useCalendarContext } from 'src/context/CalendarContext';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { customTimeSlotFormat, roundOffDate } from '../helpers/DateRound';
import AddAppointmentSlot from '../Dialogs/AddAppointment/AddAppointmentSlot';
import useAppointment from '../helpers/hooks/useAppointment';
import { useReasonsContext } from 'src/context/ReasonsContext';
export default function AppointmentEvent({ event }) {
  const { show, setShow, data, updateData, open, setOpen, handleClickOpen } = useCalendarContext();
  const { showReasons } = useReasonsContext();
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  });

  const { data: eventData } = event;
  const { status } = event.data.appointment;
  const COLORBG = EVENT_STATUS_COLORS[status];

  const date = new Date(event.start);

  const formatDate = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (minutes > 0) {
      return `${hours}h${minutes}`;
    } else {
      return `${hours}H`;
    }
  };

  const time1 = formatDate(date);

  const handleShow = () => {
    setShow(true);
    updateData(eventData.appointment);
  };

  const handleHide = () => {
    setShow(false);
  };

  const date1 = new Date(event.start);
  const roundedDate1 = customTimeSlotFormat(roundOffDate(date1));
  return (
    <Box sx={{ height: '90%', ml: 1, mt: 0.5 }}>
      {status !== 'N' ? (
        <Box
          p={1}
          sx={{
            bgcolor: COLORBG.main,
            borderRadius: '7px',
            height: '100%',
            width: '95%',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            ...(showReasons && {
              pointerEvents: 'none',
              opacity: 0.6,
            }),
          }}
          display="flex"
          justifyContent="space-between"
          aria-haspopup="true"
          onMouseEnter={handleShow}
          onMouseLeave={handleHide}
          {...bindContextMenu(popupState)}
        >
          <Typography variant="subtitle2" fontWeight={600} sx={{ color: COLORBG.text }}>
            {eventData.appointment ? eventData.appointment.name : 'Add new'}
          </Typography>
          <Typography variant="body2" fontWeight={100} sx={{ color: COLORBG.text }}>
            {time1}
          </Typography>
        </Box>
      ) : (
        showReasons && (
          <Box
            sx={{
              display: showReasons ? 'block' : 'none',
              bgcolor: 'rgba(67, 176, 255, 1)',
              borderRadius: '7px',
              height: '100%',
              width: '95%',
              border: '1px solid rgba(105, 167, 212, 1)',
            }}
          >
            <Box
              pl={1}
              pr={1}
              pt={0.5}
              pb={0.5}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              onClick={handleClickOpen}
              sx={{ cursor: 'pointer' }}
            >
              <Typography variant="caption">{roundedDate1}</Typography>
              <Typography variant="overline">(30 min)</Typography>
              <ControlPointOutlinedIcon />
            </Box>
          </Box>
        )
      )}

      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <PopOverContent />
      </Popover>
    </Box>
  );
}
