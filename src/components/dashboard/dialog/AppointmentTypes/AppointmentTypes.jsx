import * as React from 'react';
import { Typography, Dialog, DialogContent, DialogTitle, Grid, ButtonBase } from '@mui/material';
import Zoom from '@mui/material/Zoom';

import CloseIcon from '@mui/icons-material/Close';
import PoseDeProthese from './components/PoseDeProthese';
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
          Type de Rendez-vous
        </DialogTitle>
        <DialogContent
          sx={{
            p: 5,
            overflowY: 'scroll',
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: 'darkgray',
            },
          }}
        >
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item lg={12}>
              {reasons.map((item, index) => {
                const pieArray = reasons.map((item) => {
                  return item.patients.length;
                });
                const pieName = reasons.map((item) => {
                  return item.name;
                });
                return (
                  <PoseDeProthese
                    pieName={pieName}
                    pieArray={pieArray}
                    key={index}
                    total={reasons.length}
                    name={item.name}
                    patients={item.patients}
                  />
                );
              })}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const reasons = [
  {
    name: 'Pose de prothese',
    patients: [
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
    ],
  },
  {
    name: 'Premiere consultation dentaire',
    patients: [
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
    ],
  },
  {
    name: 'Extraction dentaire',
    patients: [
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
    ],
  },
  {
    name: 'Pose d’implants',
    patients: [
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
      {
        name: 'Toby Valerie',
        title: '11H20 -> 11H50',
      },
    ],
  },
];
