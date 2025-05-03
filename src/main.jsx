import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import { ToastContainer } from 'react-toastify';
import './index.css'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider>
      <BrowserRouter>
          <App />
            <ToastContainer position="top-right" autoClose={3000} />
        </BrowserRouter>
    </NotificationProvider>
  </React.StrictMode>
);

