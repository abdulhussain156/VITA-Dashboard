import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import Patient from '../Patients/Patient';

const MainRendezvous = () => {
  return (
    <Box mt={2} pl={1} pr={1}>
      <Box mt={1} display="flex" alignItems="center" justifyContent="center" gap={1}>
        <Typography variant="h6" color="primary.dark" gutterBottom>
          Rendez-vous
        </Typography>
      </Box>
      <Box>
        <Patient />
      </Box>
    </Box>
  );
};

export default MainRendezvous;

const PatitensData = {
  title: 'Madame',
  name: 'Causcci Elisa',
  date: '12/07/1989  (33 ans)',
  contact: '06 27 85 61 25',
  message: 'Verifier retour mutuelle, et confirmer le RDV ',
  doctor: 'Dr Joseph Darmon',
  time: '27 octobre 14H30 -> 15H50',
  description: '@ RDV pris sur internet',
  history: [
    {
      name: 'RDV passé',
      total: 5,
    },
    {
      name: 'RDV à venir',
      total: 5,
    },
    {
      name: 'RDV non honoré',
      total: 5,
    },
  ],
};
