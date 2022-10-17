import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Create from './pages/create';
import Dashboard from './pages/listPlayers';
import Edit from './pages/editPlayer';

const router = createBrowserRouter([
  {
    path: '/create',
    element: <Create></Create>,
  },
  {
    path: '/',
    element: <Dashboard></Dashboard>,
  },
  {
    path: '/edit',
    element: <Edit></Edit>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
