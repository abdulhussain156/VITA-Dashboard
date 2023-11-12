/* eslint-disable perfectionist/sort-imports */
import React from 'react';
import 'src/global.css';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import ThemeProvider from 'src/theme';

import Router from 'src/routes/sections';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
