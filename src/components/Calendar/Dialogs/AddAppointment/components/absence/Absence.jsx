import React from 'react';
import {
  Box,
  Checkbox,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { StyledSelect } from './customComp/StyledSelect';

const Absence = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
      <Typography variant="h6">Durée de l’absence</Typography>
      <Box alignItems="center" pl={3} pr={3} m={3} gap={3} sx={{ width: '80%' }}>
        <Box sx={{ bgcolor: 'rgba(246, 246, 246, 1)', borderRadius: '10px', flex: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-select-small-label">Premiere consultation dentaire</InputLabel>
            <StyledSelect
              labelId="demo-select-small-label"
              fullWidth
              id="demo-select-small"
              // value={age}
              // size="small"
              label="Durée de l’absence"
              onChange={handleChange}
              sx={{}}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </StyledSelect>
          </FormControl>
        </Box>
        <Box mt={2} sx={{ flex: 1 }}>
          <Box display="flex" alignItems="center" gap={3}>
            <Typography variant="h6" fontWeight={400}>
              De
            </Typography>
            <Box sx={{ bgcolor: 'rgba(246, 246, 246, 1)', borderRadius: '10px', flex: 1 }}>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-select-small-label">Premiere consultation dentaire</InputLabel> */}
                <StyledSelect
                  labelId="demo-select-small-label"
                  fullWidth
                  id="demo-select-small"
                  // value={age}
                  // size="small"
                  label="Durée de l’absence"
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none', // Remove the border color
                    },
                    '& .MuiSelect-icon': {
                      color: 'rgba(4, 96, 163, 0.75)',
                      fontSize: '2rem',
                      // Change the icon color to blue
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>09:30</MenuItem>
                  <MenuItem value={20}>10:30</MenuItem>
                  <MenuItem value={30}>11:30</MenuItem>
                </StyledSelect>
              </FormControl>
            </Box>
            <Typography variant="h6" fontWeight={400}>
              à
            </Typography>
            <Box sx={{ bgcolor: 'rgba(246, 246, 246, 1)', borderRadius: '10px', flex: 1 }}>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-select-small-label">Premiere consultation dentaire</InputLabel> */}
                <StyledSelect
                  labelId="demo-select-small-label"
                  fullWidth
                  id="demo-select-small"
                  // value={age}
                  // size="small"
                  label="Durée de l’absence"
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none', // Remove the border color
                    },
                    '& .MuiSelect-icon': {
                      color: 'rgba(4, 96, 163, 0.75)',
                      fontSize: '2rem',
                      // Change the icon color to blue
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>09:30</MenuItem>
                  <MenuItem value={20}>10:30</MenuItem>
                  <MenuItem value={30}>11:30</MenuItem>
                </StyledSelect>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box mt={2} sx={{ flex: 1 }} display="flex" gap={1} alignItems="center">
          <Checkbox
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            // defaultChecked
            sx={{
              '&.Mui-checked': {
                color: 'rgba(4, 96, 163, 1)',
              },
            }}
          />
          <Typography variant="h6" fontWeight={400}>
            Durée de l’absence
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Absence;
