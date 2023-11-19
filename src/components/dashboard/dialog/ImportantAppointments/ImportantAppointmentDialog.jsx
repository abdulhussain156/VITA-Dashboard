import * as React from 'react';
import { Typography, Dialog, DialogContent, DialogTitle, Grid, ButtonBase } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import AppointmentSelect from './components/AppointmentSelect';
import Reasons from './components/Reasons';
import CloseIcon from '@mui/icons-material/Close';
// import { renderPatientCards } from "./helpers/helper";

export default function MaxWidthDialog({ open, setOpen }) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="lg"
        onClose={(event, reason) => {
          if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            // Set 'open' to false, however you would do that with your particular code.
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
        <DialogTitle sx={{ textAlign: 'center', m: 3 }} color="secondary" variant="h4">
          Rendez-vous important
        </DialogTitle>
        <DialogContent sx={{ p: 10 }}>
          <Grid container sx={{ display: 'flex', justifyContent: 'left' }}>
            <Grid item sm={12} md={10} lg={10} sx={{ display: 'flex', justifyContent: 'left' }}>
              <AppointmentSelect />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12} textAlign="left">
              <Typography variant="h5" color="primary.dark" pb={3} pt={3}>
                Afficher les Rendez-vous par motif de consultation:
              </Typography>
            </Grid>
            {reasons.map((item, index) => (
              <Grid item sm={4} md={3} lg={3} key={index}>
                <Reasons title={item.title} color={item.color} />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const reasons = [
  {
    title: 'Consultation suivi',
    color: 'rgba(112, 183, 235, 0.75)',
  },
  {
    title: 'Soins dentaire',
    color: 'rgba(197, 200, 202, 1)',
  },
  {
    title: 'Consultation d’horto..',
    color: 'rgba(144, 195, 78, 0.3)',
  },
  {
    title: 'Pose de prothese',
    color: 'rgba(234, 183, 5, 0.5)',
  },
  {
    title: 'Prothese amovible',
    color: 'rgba(231, 198, 83, 0.5)',
  },
  {
    title: 'Detartrage',
    color: 'rgba(121, 83, 231, 0.2)',
  },
  {
    title: 'Urgence dentaire',
    color: 'rgba(223, 30, 30, 0.47)',
  },
  {
    title: 'Extraction dentaire',
    color: 'rgba(65, 171, 186, 0.25)',
  },
];
