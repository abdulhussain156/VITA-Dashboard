import React from 'react';
import { Box, ButtonBase, TextField, Typography } from '@mui/material';
const Motif = () => {
  return (
    <Box mt={3}>
      <Typography variant="h6">Motif</Typography>
      <Box alignItems="center" pl={3} pr={3} m={3} gap={3} display="flex">
        <TextField fullWidth variant="outlined" label="Motif de l’absence" sx={{ flex: 0.5 }} />
        <Box display="flex" alignItems="center" gap={5} sx={{ flex: 0.5 }}>
          {MotifColor.map((item) => (
            <ButtonBase
              sx={{ width: '40px', height: '40px', background: item, borderRadius: '13px' }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Motif;

const MotifColor = [
  'rgba(144, 195, 78, 0.63)',
  'rgba(238, 181, 34, 0.63)',
  'rgba(238, 70, 34, 0.63)',
  'rgba(217, 217, 217, 1)',
  'rgba(4, 96, 163, 0.75)',
];
