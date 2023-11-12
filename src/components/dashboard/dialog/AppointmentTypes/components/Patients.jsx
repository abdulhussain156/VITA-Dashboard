import * as React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

export default function MyComponent(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: '100%',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Avatar
          sx={{ width: 56, height: 56 }}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/168f5458-5b12-48e7-8fb5-72dbb458a6f8?apiKey=78a57a2938b447acb38179c9413df35f&"
        />
        <Box sx={{ alignSelf: 'start', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle1" color="primary.dark" fontWeight={500}>
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            color="primary.dark"
            sx={{ background: '#B9DDFF', borderRadius: '10px' }}
          >
            {props.details}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
