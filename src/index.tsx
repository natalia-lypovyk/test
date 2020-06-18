import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'ustudio-ui/theme';
import App from './core/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
