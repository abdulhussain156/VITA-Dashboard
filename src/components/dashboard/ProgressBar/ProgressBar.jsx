'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Typography, Grid } from '@mui/material';

export default function CustomizedProgressBars() {
  const Progressbar = ({ progress }) => {
    const Parentdiv = {
      height: 30,
      width: '100%',
      backgroundColor: 'whitesmoke',
      borderRadius: 40,
    };

    const Childdiv = {
      height: '100%',
      width: `${progress}%`,
      background:
        'linear-gradient(90deg, rgba(4, 96, 163, 0.75) 45.5%, rgba(210, 210, 211, 0) 120.65%)',
      filter: 'drop-shadow(2px 0px 4px rgba(0, 0, 0, 0.25))',
      borderRadius: 40,
      textAlign: 'right',
    };

    const progresstext = {
      padding: 10,
      color: 'white',
      fontWeight: 600,
    };

    return (
      <Box sx={Parentdiv}>
        <Box sx={Childdiv}>
          <span style={progresstext}>{`${progress}%`}</span>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      display="flex"
      gap={3}
      sx={{
        p: 2,
        m: 2,
        width: '100%',
        borderRadius: '10px',
        background: '#FFFFFF',
        boxShadow: 'none',
      }}
    >
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item lg={6} key={index}>
            <Progressbar progress={item.progress} />
            <Typography variant="body2" mt={1}>
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const data = [
  {
    progress: '30',
    title: ' Il reste 5 patients à recevoir aujourd’hui',
  },
  {
    progress: '30',
    title: '12 nouveaux patients ont pris RDV aujourd’hui',
  },
];
