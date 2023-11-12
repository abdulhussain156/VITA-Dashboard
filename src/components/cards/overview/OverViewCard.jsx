import React from 'react';
import { Box, Paper, Typography, ButtonBase } from '@mui/material';
const OverViewCard = ({ title, total, description }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" m={1}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          background:
            'linear-gradient(180deg, rgba(4, 96, 163, 0.66) 22.92%, rgba(4, 96, 163, 0) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {total}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: '19px', textAlign: 'center' }}>
        {description}
      </Typography>
    </Box>
  );
};

export default OverViewCard;
