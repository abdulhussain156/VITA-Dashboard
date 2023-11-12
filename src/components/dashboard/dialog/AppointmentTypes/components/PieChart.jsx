'use client';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Typography, Grid } from '@mui/material';

const RDVChart = ({ name, totalPatients, pieArray, pieName }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Create a color array to map to pieName
  const colors = pieName.map((item) => (item === name ? '#689fd1' : 'rgba(243, 243, 243, 1)'));

  const pieChartOptions = {
    labels: pieName,
    colors: colors, // Use the dynamic colors array
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
      enabled: true,
      style: {
        fontSize: '20px',
        colors: ['white'],
      },
      formatter: (val, opts) => {
        if (opts.w.config.labels[opts.seriesIndex] === name) {
          const roundedValue = Math.round(val); // Round to the nearest whole number
          return roundedValue + '%';
        } else {
          return '';
        }
      },
    },
    plotOptions: {
      pie: {
        donut: {
          expandOnClick: false,
          labels: {
            show: false,
          },
          background: 'rgba(243, 243, 243, 1)',
        },
      },
    },
    fill: {
      colors: colors, // Use the same dynamic colors array
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
  };

  return (
    <Box>
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
          <ReactApexChart options={pieChartOptions} series={pieArray} type="pie" width="80%" />
        )}
      </Box>
    </Box>
  );
};

export default RDVChart;
