import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Typography, Grid } from '@mui/material';
import AppointmentTypes from '../dialog/AppointmentTypes/AppointmentTypes';

const RDVChart = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box>
      <Typography variant="h4" color="secondary" gutterBottom>
        Type de RDV
      </Typography>
      <Box
        id="chart"
        onClick={handleClickOpen}
        display="flex"
        justifyContent="center"
        sx={{
          m: 2,
          borderRadius: '10px',
          background: '#FFFFFF',
          boxShadow: 'none',
          cursor: 'pointer',
        }}
      >
        {typeof window !== 'undefined' && (
          <ReactApexChart options={pieChartOptions} series={pieChartData} type="pie" width="120%" />
        )}
      </Box>
      <AppointmentTypes open={open} setOpen={setOpen} />
    </Box>
  );
};

export default RDVChart;

const pieChartOptions = {
  labels: ['Pose Protheses', 'Endodontie', 'consultation', 'chirurgie', "Pose d'Implants"],
  colors: ['#689fd1', '#81afd9', '#ccdfef'],
  chart: {
    width: 300, // Set as a number, not a string
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true, // Display labels on the chart
    style: {
      fontSize: '12px',
      colors: ['black'],
    },
    formatter: (val, opts) => {
      const roundedValue = Math.round(val); // Round to the nearest whole number
      return opts.w.config.labels[opts.seriesIndex] + ' ' + roundedValue + '%';
    },
  },

  plotOptions: {
    pie: {
      donut: {
        expandOnClick: false,
        labels: {
          show: false, // Show labels on each part of the chart
        },
      },
    },
  },

  fill: {
    colors: ['#689fd1', '#81afd9', '#ccdfef'],
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
  },
};

const pieChartData = [20, 10, 23, 20, 15];
