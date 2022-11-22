import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import Store from './modules/Redux/ClientStore';
import { ClientLogin } from './pages/ClientLogin';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ClientLogin />
    </Provider>
  </React.StrictMode>
);