import React from 'react';
import { Box, Button, ButtonBase, Divider, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import useShowReasons from 'src/hooks/useShowReasons';
import { useReasonsContext } from 'src/context/ReasonsContext';
const NewAppointment = () => {
  const { showReasons, handleShow } = useReasonsContext();
  return (
    <Box>
      {!showReasons && (
        <Box>
          <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
            <AddCircleOutlineIcon color="secondary" />
            <ButtonBase onClick={handleShow}>
              <Typography
                variant="subtitle1"
                color="secondary"
                sx={{ textDecoration: 'underline' }}
              >
                Nouveau RDV
              </Typography>
            </ButtonBase>
          </Box>
          <Box m={2} display="flex" justifyContent="center">
            <Divider sx={{ width: '20%', borderBottomWidth: '2px' }} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NewAppointment;
