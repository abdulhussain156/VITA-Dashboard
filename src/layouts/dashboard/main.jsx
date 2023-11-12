import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { useResponsive } from 'src/hooks/use-responsive';

import { NAV, HEADER } from './config-layout';
import { usePathname } from 'src/routes/hooks';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

const SPACING = 2;

export default function Main({ children, sx, ...other }) {
  const lgUp = useResponsive('up', 'lg');
  const pathname = usePathname();
  useEffect(() => {
    // Change the overflow-y property of the #root element if pathname is '/calendar'
    const rootElement = document.getElementById('root');
    if (rootElement && pathname === '/calendar') {
      rootElement.style.overflowY = 'hidden';
    }

    // Cleanup: Reset the overflow-y property when the component unmounts
    return () => {
      if (rootElement) {
        rootElement.style.overflowY = ''; // Reset to default value
      }
    };
  }, [pathname]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          // py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
