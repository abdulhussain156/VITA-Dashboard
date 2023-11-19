import * as React from 'react';
import { Typography, Dialog, DialogContent, DialogTitle, Grid, ButtonBase } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import CloseIcon from '@mui/icons-material/Close';
import AppointmentTab from './components/AppointmentTab';

export default function AddAppointmentSlot({ open, setOpen }) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="lg"
        onClose={(event, reason) => {
          if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            setOpen(false);
          }
        }}
        open={open}
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
              height: '100%',
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
            zIndex: '10',
          }}
        >
          <CloseIcon color="secondary" />
        </ButtonBase>

        <DialogContent sx={{ p: 0 }}>
          <AppointmentTab />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const patientsData = [
  {
    patients: {
      name: 'Toby Valerie',
      title: 'Pose de prothese ',
    },
    date: '17 Decembre à 18H15',
  },
  {
    patients: {
      name: 'Toby Valerie',
      title: 'Pose de prothese ',
    },
    date: '17 Decembre à 18H15',
  },
  {
    patients: {
      name: 'Toby Valerie',
      title: 'Pose de prothese ',
    },
    date: '17 Decembre à 18H15',
  },
  {
    patients: {
      name: 'Toby Valerie',
      title: 'Pose de prothese ',
    },
    date: '17 Decembre à 18H15',
  },
  {
    patients: {
      name: 'Toby Valerie',
      title: 'Pose de prothese ',
    },
    date: '17 Decembre à 18H15',
  },
  {
    patients: {
      name: 'Toby Valerie',
      title: 'Pose de prothese ',
    },
    date: '17 Decembre à 18H15',
  },
];
