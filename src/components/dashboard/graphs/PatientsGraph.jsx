import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Box, Typography } from '@mui/material';

const barChartDataDailyTraffic = [
  {
    name: 'Patients',
    data: [2, 3, 4, 2, 4, 5, 3, 2, 3, 4, 2, 4],
  },
];
const PatientsGraph = () => {
  const [chartData, setChartData] = useState({
    chart: {
      height: 100,
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
        fontFamily: undefined,
      },
      onDatasetHover: {
        highlightDataSeries: false, // Add this property
        style: {
          fontSize: '12px',
          fontFamily: undefined,
        },
      },
      theme: 'dark',
    },
    xaxis: {
      categories: [
        '9h',
        '10h',
        '11h',
        '12h',
        '13h',
        '14h',
        '15h',
        '16h',
        '17h',
        '18h',
        '19h',
        '20h',
      ],
      show: false,
      labels: {
        show: true,
        style: {
          // colors: "#A3AED0",
          fontSize: '14px',
          fontWeight: '500',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true, // Change this to true to display the y-axis
      categories: ['1', '2', '3', '4', '5'],
      color: 'black',
      labels: {
        show: true,
        style: {
          // colors: "#CBD5E0",
          fontSize: '14px',
        },
      },
    },
    grid: {
      show: false,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.75, // Updated opacityFrom value
        opacityTo: 0.21, // Updated opacityTo value
        colorStops: [
          {
            offset: 0,
            color: '#0460A3', // Updated color
            opacity: 1,
          },
          {
            offset: 100,
            color: 'rgba(149, 182, 206, 0.21)',
            opacity: 0.21,
          },
        ],
      },
    },
    dataLabels: {
      enabled: true, // Enable data labels
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        colors: ['white'],
      },
      offsetY: 0, // Adjust the vertical position of the data labels
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '20px',
        dataLabels: {
          position: 'top', // Display data labels at the top of the bars
          enabled: true,
          style: {
            fontSize: '12px',
            fontWeight: 'bold',
            colors: ['#000'], // Color of the data labels
          },
        },
      },
    },
  });
  return (
    <Box>
      <Typography variant="h4" color="secondary" gutterBottom>
        Nombre de patients / heure
      </Typography>
      <Box
        id="chart"
        sx={{
          width: '100%',
          p: 3,
          m: 2,
          borderRadius: '10px',
          background: '#FFFFFF',
          boxShadow: 'none',
        }}
      >
        {typeof window !== 'undefined' && (
          <Chart options={chartData} series={barChartDataDailyTraffic} type="bar" height={180} />
        )}
      </Box>
    </Box>
  );
};

export default PatientsGraph;
