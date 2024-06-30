import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';
import CredProvider from './Provider/CredProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CredProvider>
      <RouterProvider router={router}></RouterProvider>
    </CredProvider>
  </React.StrictMode>
);
