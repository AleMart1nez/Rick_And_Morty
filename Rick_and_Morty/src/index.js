import React from 'react'
import './index.css'
import App from './App'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from './redux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0B53',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});


createRoot(

  document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
       <BrowserRouter>
    <App />
  </BrowserRouter>
    </Provider>
  </ThemeProvider>
)
