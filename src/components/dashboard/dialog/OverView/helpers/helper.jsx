import { Box } from '@mui/material';
import PatientsCard from 'src/components/cards/Patients/PatientsCard';

export const renderPatientCards = (patients, label) => (
  <Box
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
    {patients.map((item, index) => (
      <Box key={index} mb={3}>
        <PatientsCard
          name={item.name}
          title={item.title}
          description={item.description}
          type={item.type}
        />
      </Box>
    ))}
  </Box>
);
