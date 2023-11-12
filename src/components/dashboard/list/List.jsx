import React from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
// import DoctorCard from "@/components/cards/Doctor/DoctorCard";
import AddIcon from '@mui/icons-material/Add';
import AddConsigneDialog from '../dialog/Consigne/AddConsigneDialog';
import DoctorCard from 'src/components/cards/Doctor/DoctorCard';

const List = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box>
      <Box display="flex" gap={2} alignItems="center">
        <Typography variant="h4" color="secondary">
          Liste des taches
        </Typography>
        <ButtonBase
          onClick={handleClickOpen}
          sx={{
            border: '2px solid #3B83B8',
            borderRadius: '50%',
            padding: '1px',
          }}
        >
          <AddIcon color="secondary" />
        </ButtonBase>
      </Box>

      <Box
        sx={{
          p: 2,
          m: 2,
          borderRadius: '10px',
          background: '#FFFFFF',
          boxShadow: 'none',
        }}
      >
        {doctorData.map((item, key) => (
          <Box key={key} mb={3} mt={3}>
            <DoctorCard
              id={key}
              name={item.name}
              title={item.title}
              description={item.description}
            />
          </Box>
        ))}
      </Box>
      <AddConsigneDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default List;

const doctorData = [
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
    description: 'Implant sur 16 et 17, prévoir greffe osseuse',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
    description: 'Implant sur 16 et 17, prévoir greffe osseuse',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
    description: 'Implant sur 16 et 17, prévoir greffe osseuse',
  },
  {
    name: 'Toby Valerie',
    title: 'Pose d’implant dentaire',
    description: 'Implant sur 16 et 17, prévoir greffe osseuse',
  },
];
