import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';
export const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none', // Remove the border color
  },
  '& .MuiSelect-icon': {
    color: 'rgba(4, 96, 163, 0.75)',
    fontSize: '2rem',
    // Change the icon color to blue
  },
}));
