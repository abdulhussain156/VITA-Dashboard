import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { StyledInput } from './customComp/StyledInput';
import { CustomSwitch } from 'src/components/dashboard/dialog/ImportantAppointments/components/CustomSwitch';

const Fees = () => {
  return (
    <Box mt={3} pr={3}>
      <Box>
        <Typography variant="h6" ml={1}>
          Honoraires
        </Typography>
        <Box display="flex" mt={5} alignItems="center" justifyContent="space-between">
          <Box sx={{ bgcolor: 'rgba(246, 246, 246, 1)', borderRadius: '10px' }}>
            <StyledInput variant="outlined" label="fees" size="small" sx={{ width: '120px' }} />
          </Box>

          <Typography variant="body2" color="primary.dark">
            afficher les honoraires
          </Typography>
          <CustomSwitch
            // checked={switchItem.checked}
            // onChange={switchItem.onChange}
            color="secondary"
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Box>
      </Box>
      <Box mt={3}>
        <Typography variant="h6" ml={1}>
          Notes{' '}
        </Typography>
        <Box mt={2} sx={{ bgcolor: 'rgba(246, 246, 246, 1)', borderRadius: '10px' }}>
          <StyledInput
            variant="outlined"
            label="Commentaires"
            size="small"
            rows={3}
            multiline
            sx={{ width: '100px' }}
          />
        </Box>
      </Box>
      <Box mt={3} display="flex" gap={3}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ bgcolor: 'rgba(246, 246, 246, 1)', color: 'black' }}
        >
          Annuler
        </Button>
        <Button variant="contained" size="large" fullWidth>
          Créer le Rendez-vous
        </Button>
      </Box>
    </Box>
  );
};

export default Fees;
