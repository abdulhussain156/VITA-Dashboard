import React from 'react';
import { EVENT_STATUS_COLORS } from '../Dummydata/CustomCalendar.constants';
import { Box, Popover, Typography } from '@mui/material';
import PopOverContent from './PopOverContent';
import { usePopupState, bindContextMenu, bindPopover } from 'material-ui-popup-state/hooks';
import { useCalendarContext } from 'src/components/context/CalendarContext';

export default function AppointmentEvent({ event }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { show, setShow, data, updateData } = useCalendarContext();
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  });

  const { name, status, resource, address, color, id } = event.data.appointment;
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
    updateData(event.data.appointment);
  };

  const handleHide = () => {
    setShow(false);
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Box
        p={1}
        sx={{ bgcolor: COLORBG.main, borderRadius: '7px', height: '100%' }}
        display="flex"
        justifyContent="space-between"
        aria-haspopup="true"
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        {...bindContextMenu(popupState)}
      >
        <Typography variant="subtitle1" fontWeight={600} sx={{ color: COLORBG.text }}>
          {name}
        </Typography>
        <Typography variant="body2" fontWeight={100}>
          {time1}
        </Typography>
      </Box>
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
