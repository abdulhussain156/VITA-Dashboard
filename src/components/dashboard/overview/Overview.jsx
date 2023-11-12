'use client';
import React from 'react';
import { Box, Paper, Typography, ButtonBase } from '@mui/material';
import OverViewDialog from 'src/components/dashboard/dialog/OverView/OverViewDialog';
import OverViewCard from 'src/components/cards/overview/OverViewCard';
// import OverViewCard from "../../cards/overview/OverViewCard";

const Overview = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Typography variant="h4" color="secondary" gutterBottom>
        Apercu de la journée
      </Typography>
      <Box
        onClick={handleClickOpen}
        sx={{
          p: 3,
          m: 2,
          justifyContent: 'space-evenly',
          display: 'flex',
          width: '100%',
          borderRadius: '10px',
          background: '#FFFFFF',
          boxShadow: 'none',
          cursor: 'pointer',
        }}
      >
        {overviewData.map((item, index) => {
          return (
            <Box key={index}>
              <OverViewCard title={item.title} total={item.total} description={item.description} />
            </Box>
          );
        })}
      </Box>
      <OverViewDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Overview;

const overviewData = [
  {
    title: 'patients',
    total: 20,
    description: 'Présent en consultation aujourd’hui',
  },
  {
    title: 'Annulation',
    total: 2,
    description: 'Nombre d’annulations du jour',
  },
  {
    title: 'Taux de présence',
    total: 25,
    description: 'Taux de remplissage de la journée ',
  },
];
