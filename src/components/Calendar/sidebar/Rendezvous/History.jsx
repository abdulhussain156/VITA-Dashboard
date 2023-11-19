import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import SvgColor from 'src/components/svg-color';
const History = ({ history }) => {
  return (
    <Box mt={2}>
      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
        <SvgColor
          src="/assets/icons/clock.svg"
          sx={{
            width: 15,
            height: 15,
            color: 'rgba(4, 96, 163, 0.75)',
          }}
        />
        <Typography variant="subtitle1" color="primary.dark">
          Historique
        </Typography>
      </Box>
      <Box m={1} display="flex" justifyContent="center">
        <Divider sx={{ width: '20%', borderBottomWidth: '2px' }} />
      </Box>
      <Box
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ background: 'rgba(242, 242, 242, 1)', borderRadius: '10px' }}
      >
        {history.map((item) => {
          const [firstPart, ...restParts] = item.name.split(' ');
          return (
            <Box textAlign="center">
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{
                  color:
                    item.name === 'RDV à venir'
                      ? 'rgba(4, 96, 163, 0.75)'
                      : item.name === 'RDV non honoré'
                      ? 'rgba(223, 30, 30, 0.75)'
                      : '',
                }}
                gutterBottom
              >
                {item.total}
              </Typography>
              <Typography variant="caption" color="primary.dark" fontWeight={500}>
                {firstPart}
                <br />
                {restParts.join(' ')}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default History;
