import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const DoctorCard = ({ id, name, title, description }) => {
  return (
    <Box display="flex" alignItems="center" gap={3} justifyContent="space-around">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle2" color="secondary">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: '60px',
          borderRadius: '5px',
          background:
            'linear-gradient(180deg, rgba(4, 96, 163, 0.75) -11.21%, rgba(4, 96, 163, 0.135) 111.21%)',
        }}
      >
        <DoneIcon sx={{ color: 'white' }} />
      </Box>
    </Box>
  );
};

export default DoctorCard;
