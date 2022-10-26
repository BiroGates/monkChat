import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/common/common.scss';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Paths from './routes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <Paths />
  </React.StrictMode>
);
