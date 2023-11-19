import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Main from './rendezvous/Main';
import MainAbsence from './absence/MainAbsence';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function AppointmentTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <Box mt={6} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: '#F0F0F0',
            borderRadius: '10px',
            width: 700,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"
            TabIndicatorProps={{ style: { display: 'none' } }}
            // Hide the underline
          >
            <Tab
              label="Rendez-vous"
              {...a11yProps(0)}
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                m: 0.8,
                bgcolor: value === 0 ? '#FFFFFF' : 'transparent',
                color: value === 0 ? '#0460A3' : '#717171',
                boxShadow: value === 0 && '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: value === 0 && '10px',
              }}
            />
            <Tab
              label="Absence"
              {...a11yProps(1)}
              sx={{
                m: 0.8,
                fontSize: '16px',
                fontWeight: 500,
                bgcolor: value === 1 ? '#FFFFFF' : 'transparent',
                color: value === 1 ? '#0460A3' : '#717171',
                boxShadow: value === 1 && '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: value === 1 && '10px',
              }}
            />
            <Tab
              label="Nouvelles ouvertures"
              {...a11yProps(2)}
              sx={{
                m: 0.8,
                fontSize: '16px',
                fontWeight: 500,
                bgcolor: value === 2 ? '#FFFFFF' : 'transparent',
                color: value === 2 ? '#0460A3' : '#717171',
                boxShadow: value === 2 && '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: value === 2 && '10px',
              }}
            />
          </Tabs>
        </AppBar>
      </Box>
      <Box>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Main />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <MainAbsence />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  );
}
