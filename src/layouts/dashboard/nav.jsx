import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';
import Scrollbar from 'src/components/scrollbar';
import { NAV } from './config-layout';
import navConfig from './config-navigation';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import { Search, SearchIconWrapper, StyledInputBase } from './customSearch/CustomSearchSideBar';
import { Button, ButtonBase } from '@mui/material';
import { useReasonsContext } from 'src/context/ReasonsContext';
// ----------------------------------------------------------------------
const PLACEHOLDER_LINKS = [
  { text: 'Aide', icon: SettingsIcon },
  { text: 'Contactez-nous', icon: SupportIcon },
  { text: 'Deconnexion', icon: LogoutIcon },
];

const selection = [
  { title: 'Premiére consultation dentai..', color: 'rgba(199, 225, 165, 1)' },
  { title: ' Soins dentaire', color: 'rgba(243, 182, 168, 1)' },
  { title: ' Empreinte', color: 'rgba(159, 183, 242, 1)' },
  { title: ' Consultation d’enfant', color: 'rgba(243, 168, 204, 1)' },
  { title: 'Urgence', color: 'rgba(223, 30, 30, 0.6)' },
];
export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');
  const { showReasons } = useReasonsContext();
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2, mt: 3 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderUpgrade = (
    <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
      {PLACEHOLDER_LINKS.map(({ text, icon }) => (
        <ListItem key={text} disablePadding>
          <ListItemButton
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <ListItemText
              primary={text}
              sx={{
                color: text === 'Deconnexion' ? 'rgba(223, 30, 30, 0.75)' : '',
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%',
          height: '64px',
          background:
            'linear-gradient(180deg, rgba(4, 96, 163, 0.075) 0%, rgba(4, 96, 163, 0.375) 100%)',
          boxShadow: '0px 4px 20px 5px rgba(0, 0, 0, 0.15)',
          border: '2px solid rgba(4, 96, 163, 0.2)',
          borderTop: 'none', // Remove top border
          borderBottom: '2px solid rgba(4, 96, 163, 0.4)',
          boxShadow: '0px 4px 100px 10px rgba(0, 0, 0, 0.15)',
          borderRadius: '0px 0px 20px 0px',
        }}
      >
        <Typography variant="h4" color="primary">
          VITA
        </Typography>
      </Box>

      {/* {renderAccount} */}

      {showReasons ? (
        <Box mt={2}>
          <Typography variant="body1" color="primary" textAlign="center">
            Séléctionnez <br></br> un motif de Rendez-vous
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color="secondary" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <Box m={1}>
            {selection.map((item) => (
              <ButtonBase
                sx={{
                  bgcolor: item.color,
                  fontSize: '12px',
                  width: '100%',
                  p: 1.5,
                  mb: 1,
                  borderRadius: '10px',
                  color: 'white',
                }}
              >
                {item.title}
              </ButtonBase>
            ))}
          </Box>
        </Box>
      ) : (
        renderMenu
      )}

      <Box sx={{ flexGrow: 1 }} />

      {renderUpgrade}
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            background: 'linear-gradient(179.99deg, #EBF6FF 0.01%, rgba(161, 196, 223, 0) 71.74%)',
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: 'rgba(4, 96, 163, 0.15)',
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        <item.icon sx={{ color: active ? '#3B83B8' : '' }} />
      </Box>

      <Box component="span" sx={{ color: active ? '#3B83B8' : '' }}>
        {item.title}{' '}
      </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
