import React from 'react';
import { Box, Typography, Grid, Avatar, Checkbox, Button } from '@mui/material';
import SvgColor from 'src/components/svg-color';
import History from '../Rendezvous/History';
import { useCalendarContext } from 'src/context/CalendarContext';

const Patient = () => {
  const { data } = useCalendarContext();
  return (
    <Box>
      <Box sx={{ bgcolor: 'rgba(144, 195, 78, 0.3)', borderRadius: '10px' }} p={1}>
        <Typography variant="subtitle2" color="primary.dark" textAlign="center">
          Soins dentaire
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={2} justifyContent="space-between" mt={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Box flex={1}>
          <Typography variant="overline" color="primary.dark">
            {data.title}
          </Typography>
          <Typography variant="subtitle1" color="primary.dark" fontWeight={600}>
            {data.name}
          </Typography>
          <Typography variant="caption" color="primary.dark" fontWeight={600}>
            {data.date}
          </Typography>
        </Box>
      </Box>
      <Box mt={1}>
        <Box display="flex" alignItems="center" gap={2}>
          <SvgColor
            src="/assets/icons/contact.svg"
            sx={{
              width: 20,
              height: 20,
              color: 'rgba(4, 96, 163, 0.75)',
            }}
          />
          <Typography variant="subtitle2" color="primary.dark" fontWeight={600}>
            {data.contact}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={2} mt={1}>
          <SvgColor
            src="/assets/icons/message.svg"
            sx={{
              width: 20,
              height: 20,
              color: 'rgba(4, 96, 163, 0.75)',
            }}
          />
          <Typography
            variant="subtitle2"
            fontStyle="italic"
            color="primary.dark"
            fontWeight={400}
            lineHeight={1}
          >
            "{data.message}"
          </Typography>
        </Box>
        <Box sx={{ bgcolor: '#69A7D4', borderRadius: '10px' }} p={1} mt={1}>
          <Typography variant="subtitle2" color="white" textAlign="center">
            {data.doctor}
          </Typography>
        </Box>
        <Box mt={2} display="flex" alignItems="center" gap={2}>
          <SvgColor
            src="/assets/icons/calendarIcon.svg"
            sx={{
              width: 25,
              height: 25,
              color: 'rgba(4, 96, 163, 0.75)',
            }}
          />
          <Typography variant="subtitle2" color="primary.dark" fontWeight={600}>
            {data.time}
          </Typography>
        </Box>
        <Box textAlign="right">
          <Typography variant="caption" color="primary.dark" fontWeight={600}>
            {data.description}
          </Typography>
        </Box>
      </Box>
      <History history={data.history} />
    </Box>
  );
};

export default Patient;
