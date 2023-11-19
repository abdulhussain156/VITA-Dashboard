import { Avatar, Box, Button, Link, Typography } from '@mui/material';
import React from 'react';

const Agenda = () => {
  const DoctorCard = ({ id, name }) => {
    return (
      <Box
        display="flex"
        alignItems="center"
        gap={3}
        sx={{ bgcolor: 'rgba(246, 246, 246, 1)', p: 1, borderRadius: '10px', mb: 1 }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} />
        <Box>
          <Typography variant="body1">{name}</Typography>
        </Box>
      </Box>
    );
  };
  return (
    <Box>
      <Typography variant="h6">Agenda</Typography>
      <Box mt={3} sx={{ height: '50%' }}>
        {doctorData.map((item, key) => (
          <DoctorCard id={key} name={item.name} />
        ))}
      </Box>
      <Link
        component="button"
        variant="body2"
        fontWeight={500}
        sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 1.5 }}
      >
        Voir plus
      </Link>
    </Box>
  );
};

export default Agenda;

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
];
