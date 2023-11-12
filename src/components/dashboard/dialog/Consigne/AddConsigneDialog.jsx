'use client';
import * as React from 'react';
import { Typography, Dialog, DialogContent, DialogTitle, Grid, ButtonBase } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import CloseIcon from '@mui/icons-material/Close';
import SearchPatients from './components/SearchPatients';
import ColumnNames from './components/ColumnNames';
import Meetings from './components/Meetings';

export default function MaxWidthDialog({ open, setOpen }) {
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
          Ajouter une consigne
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={12} md={10} lg={10}>
              <SearchPatients />
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ overflow: 'hidden' }}>
            <Grid item xs={12} lg={12} textAlign="left" sx={{ ml: 5, mt: 1, mb: 1 }}>
              <Typography variant="h5" color="secondary" pt={3}>
                Prochain Rendez-vous à venir
              </Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <ColumnNames />
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                maxHeight: '50vh',
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
              {patientsData.map((item, index) => (
                <Meetings key={index} patientsData={item.patients} date_RDV={item.date} />
              ))}
            </Grid>
          </Grid>
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
