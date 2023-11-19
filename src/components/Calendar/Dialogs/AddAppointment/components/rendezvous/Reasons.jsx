import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React from 'react';

const Reasons = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
      <Typography variant="h6">Motif de consultation et horaire.</Typography>
      <Box display="flex" alignItems="center" pl={3} pr={3} m={3} gap={3}>
        <Box
          display="flex"
          alignItems="center"
          pl={3}
          pr={3}
          sx={{ bgcolor: 'rgba(246, 246, 246, 1)', borderRadius: '10px', flex: 0.7 }}
        >
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{
              borderRightWidth: 3,
              bgcolor: 'rgba(144, 195, 78, 0.5)',
              height: '30px',
              mt: 1.5,
            }}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-select-small-label">Premiere consultation dentaire</InputLabel>
            <Select
              labelId="demo-select-small-label"
              fullWidth
              id="demo-select-small"
              // value={age}
              // size="small"
              label="Premiere consultation dentaire"
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ bgcolor: 'rgba(246, 246, 246, 1)', borderRadius: '10px', flex: 0.3 }}>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="demo-simple-select-autowidth-label">30 min</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              // value={age}
              // size="small"
              onChange={handleChange}
              autoWidth
              label="30 min"
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
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" pl={3} pr={3} m={3} gap={3}>
        <Box
          display="flex"
          alignItems="center"
          pl={3}
          pr={3}
          sx={{ bgcolor: 'rgba(246, 246, 246, 1)', borderRadius: '10px', flex: 0.7 }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-select-small-label">Mercredi 25 Decembre 2023</InputLabel>
            <Select
              labelId="demo-select-small-label"
              fullWidth
              id="demo-select-small"
              // value={age}
              label="Mercredi 25 Decembre 2023"
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ bgcolor: 'rgba(246, 246, 246, 1)', borderRadius: '10px', flex: 0.3 }}>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="demo-simple-select-autowidth-label">18:30</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              // value={age}
              onChange={handleChange}
              autoWidth
              label="30 min"
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
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Reasons;
