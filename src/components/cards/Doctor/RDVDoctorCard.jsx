import * as React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

export default function MyComponent(props) {
  return (
    <Box
      sx={{
        borderRadius: '15px',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column',

        padding: '0 9px 0 20px',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          alignSelf: 'end',
          marginTop: '7px',
          whiteSpace: 'nowrap',
        }}
      >
        19H
      </Typography>
      <Box
        sx={{
          alignSelf: 'start',
          display: 'flex',
          width: '272px',
          maxWidth: '100%',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '20px',
          margin: '6px 0 27px',
        }}
      >
        <Avatar
          sx={{ width: 56, height: 56 }}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/168f5458-5b12-48e7-8fb5-72dbb458a6f8?apiKey=78a57a2938b447acb38179c9413df35f&"
        />
        <Box
          sx={{
            alignSelf: 'start',
            display: 'flex',
            flexDirection: 'column',
            // alignItems: "flex-start",
          }}
        >
          <Typography variant="h6">{props.name}</Typography>
          <Typography variant="subtitle2">{props.title}</Typography>
          <Typography variant="body2">{props.description}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
