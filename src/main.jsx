import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';
import CredProvider from './Provider/CredProvider';
import { Toaster } from 'react-hot-toast';
// query related info => 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CredProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </CredProvider>
  </React.StrictMode>
);
