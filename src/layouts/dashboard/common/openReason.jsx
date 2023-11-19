import { useState } from 'react';

import Slide from '@mui/material/Slide';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { bgBlur } from 'src/theme/css';
import CloseIcon from '@mui/icons-material/Close';
import Iconify from 'src/components/iconify';
import { useReasonsContext } from 'src/context/ReasonsContext';
import { ButtonBase, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 70;

const StyledSearchbar = styled('div')(({ theme }) => ({
  ...bgBlur({
    color: theme.palette.background.default,
  }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function OpenReason() {
  const { showReasons, handleClose } = useReasonsContext();

  return (
    <div>
      <Slide direction="down" in={showReasons} mountOnEnter unmountOnExit>
        <StyledSearchbar>
          <Typography variant="h4" color="primary.dark" textAlign="center" sx={{ width: '100%' }}>
            Séléctionner une plage horaire pour ajouter le RDV
          </Typography>
          <ButtonBase
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '20px',
              top: '20px',
              border: '3px solid #3B83B8',
              borderRadius: '50%',
              padding: '5px',
            }}
          >
            <CloseIcon color="secondary" />
          </ButtonBase>
        </StyledSearchbar>
      </Slide>
    </div>
  );
}
