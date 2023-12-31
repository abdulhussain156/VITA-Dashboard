import React from 'react';
import { Box, Typography, Grid, Avatar, Checkbox } from '@mui/material';
import { CustomSwitch } from 'src/components/dashboard/dialog/ImportantAppointments/components/CustomSwitch';

const Doctor = ({ id, name, title, description, isChecked, onDoctorCheck }) => {
  return (
    <Box display="flex" alignItems="center" gap={2} justifyContent="space-between" mb={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Box flex={1} textAlign="center">
        <Typography variant="subtitle2" textAlign="center" color="primary.dark">
          {name}
        </Typography>
        <Typography variant="caption" textAlign="center" color="secondary.lighter">
          {title}
        </Typography>
      </Box>
      <Box>
        <Checkbox
          inputProps={{ 'aria-label': `Checkbox for ${name}` }}
          checked={isChecked}
          onChange={onDoctorCheck}
          sx={{
            '&.Mui-checked': {
              color: 'rgba(4, 96, 163, 1)',
            },
          }}
          // Other checkbox properties...
        />
      </Box>
    </Box>
  );
};

export default Doctor;
