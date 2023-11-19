import {
  Box,
  Button,
  Popover,
  Typography,
  Paper,
  TextField,
  Divider,
  ButtonBase,
  Link,
} from '@mui/material';
import React from 'react';
import ChairIcon from '@mui/icons-material/Chair';
import SvgColor from 'src/components/svg-color';

const status = [
  {
    text: 'En salle d’attente',
    icon: '/assets/icons/chair.svg',
  },
  {
    text: 'En consultation',
    icon: '/assets/icons/heart.svg',
  },
  {
    text: 'Vu',
    icon: '/assets/icons/tick.svg',
  },
  {
    text: 'Absent excusé',
    icon: '/assets/icons/cancel.svg',
  },
  {
    text: 'Absent non excusé',
    icon: '/assets/icons/schedule.svg',
  },
];

const PopOverContent = () => {
  return (
    <Paper elevation={2} sx={{ p: 2, pointerEvents: 'auto' }}>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="secondary" sx={{ borderRadius: '15px' }}>
          + Nouveau RDV
        </Button>
      </Box>

      <Box mt={2}>
        <Typography vairant="subtitle1">Note</Typography>
        <TextField
          vairant="outlined"
          size="small"
          label="Ecrivez un commentaire"
          sx={{ background: 'rgba(240, 240, 240, 1)' }}
        />
      </Box>
      <Box mt={2}>
        {status.map((item) => (
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            p={1}
            sx={{
              borderRadius: '8px',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: 'rgba(144, 195, 78, 0.22)',
                '& .svg-color': {
                  color: 'rgba(127, 171, 71, 1)', // Change the color of SVG on hover
                },
                '& .MuiTypography-root': {
                  color: 'rgba(127, 171, 71, 1)', // Change the color of Typography on hover
                },
              },
            }}
          >
            <SvgColor
              src={item.icon}
              sx={{
                width: 18,
                height: 18,
                // color: item.text === 'En consultation' && 'rgba(127, 171, 71, 1)',
              }}
            />

            <Typography variant="subtitle2" sx={{ flex: 1 }}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box m={2} display="flex" justifyContent="center">
        <Divider sx={{ width: '20%', borderBottomWidth: '2px' }} />
      </Box>
      <Box display="flex" alignItems="center" gap={1} p={1} sx={{ cursor: 'pointer' }}>
        <SvgColor
          src="/assets/icons/delete.svg"
          sx={{
            width: 18,
            height: 18,
            color: 'rgba(223, 30, 30, 0.75)',
          }}
        />

        <Typography variant="subtitle2" color="error.dark">
          Supprimer le RDV
        </Typography>
      </Box>
    </Paper>
  );
};

export default PopOverContent;
