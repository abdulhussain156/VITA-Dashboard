import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
const RepeatAbsence = () => {
  return (
    <Box mt={1}>
      <Typography variant="h6">Répéter absence</Typography>
      <Box alignItems="center" pl={3} pr={3} m={3} gap={3} display="flex" sx={{ width: '40%' }}>
        <Button
          variant="outlined"
          fullWidth
          size="large"
          sx={{ color: 'black', borderColor: 'rgba(227, 227, 227, 1)' }}
        >
          OUI
        </Button>
        <Button variant="contained" color="primary" fullWidth size="large">
          NON
        </Button>
      </Box>
      <Box display="flex" justifyContent="end" alignItems="right">
        <Box alignItems="center" pl={3} pr={3} m={3} gap={3} display="flex" sx={{ width: '50%' }}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ bgcolor: 'rgba(246, 246, 246, 1)', color: 'black' }}
          >
            Annuler
          </Button>
          <Button variant="contained" color="primary" fullWidth size="large">
            Créer absence
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RepeatAbsence;
