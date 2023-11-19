import React from 'react';

import { Box, Divider, Typography } from '@mui/material';
import { StyledInput } from './customComp/StyledInput';

const PatientsForm = () => {
  return (
    <Box mt={3}>
      <Typography variant="h6" textAlign="center">
        Patient
      </Typography>
      <Box m={5} sx={{ bgcolor: 'rgba(246, 246, 246, 1)', borderRadius: '10px' }}>
        <Box display="flex" justifyContent="space-around">
          <Box pt={0.5} pb={0.5} sx={{ flex: 0.5 }}>
            <StyledInput fullWidth variant="outlined" label="Nom" size="small" sx={{}} />
          </Box>
          <Box pt={0.5} pb={0.5} sx={{ borderLeft: '1px solid rgba(237, 237, 237, 1)', flex: 0.5 }}>
            <StyledInput fullWidth variant="outlined" label="Prenom" size="small" />
          </Box>
        </Box>
        <Divider sx={{ bgcolor: '#EDEDED', opacity: '0.5' }} />
        <Box display="flex" justifyContent="space-around">
          <Box pt={0.5} pb={0.5} sx={{ flex: 0.5 }}>
            <StyledInput fullWidth variant="outlined" label="Date de naissance" size="small" />
          </Box>
          <Box pt={0.5} pb={0.5} sx={{ borderLeft: '1px solid rgba(237, 237, 237, 1)', flex: 0.5 }}>
            <StyledInput fullWidth variant="outlined" label="Téléphone " size="small" />
          </Box>
        </Box>
        <Divider sx={{ bgcolor: '#EDEDED', opacity: '0.5' }} />
        <Box>
          <Box pt={0.5} pb={0.5} sx={{ flex: 0.5 }}>
            <StyledInput fullWidth variant="outlined" label="Adresse mail" size="small" />
          </Box>
        </Box>
        <Divider sx={{ bgcolor: '#EDEDED', opacity: '0.5' }} />
        <Box>
          <Box pt={0.5} pb={0.5} sx={{ flex: 0.5 }}>
            <StyledInput fullWidth variant="outlined" label="Adresse postale" size="small" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientsForm;
