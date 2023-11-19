'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CustomSwitch } from './CustomSwitch';

// Define a type for a switch item

const Appointments = () => {
  // Define an array of switch items
  const [switches, setSwitches] = useState([
    {
      label: 'Afficher les Rendez-vous supérieurs à 1 heure',
      checked: true,
      onChange: (event) => handleSwitchChange(event, 0),
    },
    {
      label: 'Afficher les Rendez-vous des patients deja suivis',
      checked: true,
      onChange: (event) => handleSwitchChange(event, 1),
    },
  ]);

  const handleSwitchChange = (event, index) => {
    const updatedSwitches = [...switches];
    updatedSwitches[index].checked = event.target.checked;
    setSwitches(updatedSwitches);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {switches.map((switchItem, index) => (
        <Box key={index} mt={2} mb={2} display="flex" justifyContent="space-between" gap={8}>
          <Typography variant="h6" color="primary.dark">
            {switchItem.label}
          </Typography>
          <CustomSwitch
            checked={switchItem.checked}
            onChange={switchItem.onChange}
            color="secondary"
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Appointments;
