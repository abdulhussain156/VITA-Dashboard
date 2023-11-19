import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';
import { bgBlur } from 'src/theme/css';
import SearchIcon from '@mui/icons-material/Search';

import Iconify from 'src/components/iconify';

import { NAV, HEADER } from './config-layout';
import { Avatar, ButtonBase, Typography } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from './customSearch/CustomSearch';
import { useReasonsContext } from 'src/context/ReasonsContext';
import CloseIcon from '@mui/icons-material/Close';
import OpenReason from './common/openReason';
// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();
  const { showReasons } = useReasonsContext();
  const lgUp = useResponsive('up', 'lg');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <OpenReason />

      <Search>
        <SearchIconWrapper>
          <SearchIcon color="secondary" />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
      </Search>

      <Box sx={{ flexGrow: 1 }} />

      <Box display="flex" gap={2} alignItems="center">
        <Box display="flex" flexDirection="column" alignItems="end">
          <Typography variant="subtitle1" color="secondary" lineHeight={1}>
            Dr Joseph Darmon
          </Typography>
          <Typography variant="subtitle2" color="secondary">
            Chirurgien-Dentiste
          </Typography>
        </Box>

        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        // height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: '#DEEAF3',
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          // height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
