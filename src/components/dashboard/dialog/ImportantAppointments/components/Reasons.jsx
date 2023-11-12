import React from 'react';
import { Typography, Box, Checkbox, Divider, Paper } from '@mui/material';

const Reasons = ({ title, color }) => {
  return (
    <Box display="flex">
      <Checkbox
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        // defaultChecked
        sx={{
          '&.Mui-checked': {
            color: 'rgba(4, 96, 163, 1)',
          },
        }}
      />
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          display: 'flex',
          pl: 2,
          pr: 2,
          pt: 1,
          pb: 1,
          alignItems: 'center',
          gap: 1,
          borderRadius: '10px',
        }}
      >
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            borderRightWidth: 3,
            borderBottomWidth: '30px',
            background: color,
          }}
        />
        <Typography variant="subtitle2" color="primary.dark">
          {title}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Reasons;
