import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const NewAppointment = () => {
  return (
    <Box mt={2}>
      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
        <AddCircleOutlineIcon color="secondary" />

        <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'underline' }}>
          Nouveau RDV
        </Typography>
      </Box>
      <Box m={2} display="flex" justifyContent="center">
        <Divider sx={{ width: '20%', borderBottomWidth: '2px' }} />
      </Box>
    </Box>
  );
};

export default NewAppointment;
