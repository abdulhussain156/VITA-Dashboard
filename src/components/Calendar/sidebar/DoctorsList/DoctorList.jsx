import React from 'react';
import { Box, ButtonBase, Checkbox, Typography } from '@mui/material';
import Doctor from './Doctor';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const DoctorList = () => {
  return (
    <Box>
      <Box m={2}>
        <Box mt={1} display="flex" alignItems="center" justifyContent="center" gap={1}>
          <Typography variant="h6" color="primary.dark">
            Agenda
          </Typography>
          {/* <AddCircleOutlineIcon color="secondary" /> */}
        </Box>
      </Box>
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        sx={{ backgroundColor: 'rgba(241, 241, 241, 1)' }}
      >
        <Checkbox
          inputProps={{ 'aria-label': 'Checkbox demo' }}
          // defaultChecked
          sx={{
            '&.Mui-checked': {
              color: 'rgba(4, 96, 163, 1)',
            },
          }}
        />
        <Typography variant="subtitle2" color="primary.dark" sx={{ flex: 1 }}>
          Selectionné tous
        </Typography>
      </Box>

      <Box mt={2} p={1}>
        {doctorData.map((item, key) => (
          <Doctor id={key} name={item.name} title={item.title} description={item.description} />
        ))}
      </Box>
    </Box>
  );
};

export default DoctorList;

const doctorData = [
  {
    name: 'Toby Valerie',
    title: '(Meudon)',
  },
  {
    name: 'Toby Valerie',
    title: '(Neuilly-sur-Seine)',
  },
];
