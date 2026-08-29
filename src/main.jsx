import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '@fontsource-variable/inter/wght.css';
import './index.css';

// Set before the first render so sections are hidden from their first paint
// rather than flashing in and back out.
document.documentElement.classList.add('js-reveal');

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
