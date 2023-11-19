'use client';
import * as React from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  styled,
  ButtonBase,
} from '@mui/material';
import MuiGrid from '@mui/material/Grid';
import Zoom from '@mui/material/Zoom';
import { renderPatientCards } from './helpers/helper';
import CloseIcon from '@mui/icons-material/Close';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function MaxWidthDialog({ open, setOpen }) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            // Set 'open' to false, however you would do that with your particular code.
            setOpen(false);
          }
        }}
        TransitionComponent={Zoom}
        TransitionProps={{
          timeout: {
            enter: 500,
            exit: 200,
          },
        }}
        sx={{
          backdropFilter: 'blur(10px)',
        }}
        PaperProps={{
          sx: {
            '&.MuiPaper-root': {
              borderRadius: '30px',
            },
          },
        }}
      >
        <ButtonBase
          onClick={() => setOpen(false)}
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
        <DialogTitle sx={{ textAlign: 'center', m: 5 }} color="secondary" variant="h4">
          Apercu de la journée
        </DialogTitle>
        <DialogContent>
          <Grid container sx={{ overflow: 'hidden' }}>
            <Grid item xs>
              <Typography variant="subtitle1" color="primary.dark" textAlign="center">
                <span style={{ textDecoration: 'underline' }}>Patients presents</span> (21)
              </Typography>
              {renderPatientCards(patientsData, 'Patients presents')}
            </Grid>

            <Divider orientation="vertical" variant="middle" flexItem />

            <Grid item xs>
              <Typography variant="subtitle1" color="primary.dark" textAlign="center">
                <span style={{ textDecoration: 'underline' }}>Absence/retard</span> (3)
              </Typography>
              {renderPatientCards(patientsData2, 'Absence/retard')}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const patientsData = [
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
  },
];

const patientsData2 = [
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
    description: 'Implant sur 16 et 17, prévoir greffe osseuse',
    type: 'cancelled',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
    description: 'Implant sur 16 et 17, prévoir greffe osseuse',
    type: 'rescheduled',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
    description: 'Implant sur 16 et 17, prévoir greffe osseuse',
    type: 'late',
  },
];
