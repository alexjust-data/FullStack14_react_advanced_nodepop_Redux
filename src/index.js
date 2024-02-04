

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app';
import Root from './Root';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>
);



