import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>
);