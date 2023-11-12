import React from 'react';
import { Box, Typography, Grid, Avatar, Checkbox } from '@mui/material';
import { CustomSwitch } from 'src/components/dashboard/dialog/ImportantAppointments/components/CustomSwitch';

const Doctor = ({ id, name, title, description }) => {
  return (
    <Box display="flex" alignItems="center" gap={2} justifyContent="space-between" mb={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Box flex={1}>
        <Typography variant="subtitle2" color="primary.dark">
          {name}
        </Typography>
        <Typography variant="overline" textAlign="center" color="secondary.lighter">
          {title}
        </Typography>
      </Box>
      <Box>
        <Checkbox
          inputProps={{ 'aria-label': 'Checkbox demo' }}
          // defaultChecked
          sx={{
            '&.Mui-checked': {
              color: 'rgba(4, 96, 163, 1)',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Doctor;
